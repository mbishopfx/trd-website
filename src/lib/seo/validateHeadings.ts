/**
 * GEO Heading Structure Validator
 * Validates heading hierarchy and entity density for 2026 GEO/AIO standards
 */

export interface HeadingValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  stats: {
    h1Count: number;
    h2Count: number;
    h3Count: number;
    h4Count: number;
    h5Count: number;
    h6Count: number;
    totalHeadings: number;
    skippedLevels: number[];
    entityDensity: number;
    avgHeadingLength: number;
  };
  recommendations: string[];
}

export interface HeadingStructure {
  level: number;
  text: string;
  entities?: string[];
}

export interface ValidationOptions {
  requiredEntities?: string[];
  minEntityDensity?: number;
  maxHeadingLength?: number;
  minHeadingLength?: number;
  checkQuestionFormat?: boolean;
}

/**
 * Validate heading hierarchy and structure
 */
export function validateHeadings(
  headings: HeadingStructure[],
  options: ValidationOptions = {}
): HeadingValidationResult {
  const {
    requiredEntities = [],
    minEntityDensity = 0.4,
    maxHeadingLength = 70,
    minHeadingLength = 20,
    checkQuestionFormat = false
  } = options;

  const result: HeadingValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    stats: {
      h1Count: 0,
      h2Count: 0,
      h3Count: 0,
      h4Count: 0,
      h5Count: 0,
      h6Count: 0,
      totalHeadings: headings.length,
      skippedLevels: [],
      entityDensity: 0,
      avgHeadingLength: 0
    },
    recommendations: []
  };

  if (headings.length === 0) {
    result.isValid = false;
    result.errors.push('No headings found on page');
    return result;
  }

  // Count headings by level
  let totalLength = 0;
  headings.forEach(heading => {
    totalLength += heading.text.length;
    switch (heading.level) {
      case 1: result.stats.h1Count++; break;
      case 2: result.stats.h2Count++; break;
      case 3: result.stats.h3Count++; break;
      case 4: result.stats.h4Count++; break;
      case 5: result.stats.h5Count++; break;
      case 6: result.stats.h6Count++; break;
    }
  });

  result.stats.avgHeadingLength = Math.round(totalLength / headings.length);

  // CRITICAL: Validate single H1
  if (result.stats.h1Count === 0) {
    result.isValid = false;
    result.errors.push('Page must have exactly one H1 heading');
  } else if (result.stats.h1Count > 1) {
    result.isValid = false;
    result.errors.push(`Page has ${result.stats.h1Count} H1 headings - must have exactly one`);
  }

  // Check for skipped heading levels
  let previousLevel = 0;
  headings.forEach((heading, index) => {
    if (index === 0 && heading.level !== 1) {
      result.warnings.push('First heading should be H1');
    }
    
    if (heading.level > previousLevel + 1) {
      const skipped = heading.level - previousLevel - 1;
      result.stats.skippedLevels.push(heading.level);
      result.warnings.push(
        `Heading level skipped: jumped from H${previousLevel} to H${heading.level} (skipped ${skipped} level${skipped > 1 ? 's' : ''})`
      );
    }
    
    previousLevel = heading.level;
  });

  // Check heading length
  headings.forEach(heading => {
    if (heading.text.length > maxHeadingLength && heading.level <= 2) {
      result.warnings.push(
        `H${heading.level} "${heading.text.substring(0, 40)}..." is too long (${heading.text.length} chars, max ${maxHeadingLength})`
      );
    }
    
    if (heading.text.length < minHeadingLength && heading.level <= 2) {
      result.warnings.push(
        `H${heading.level} "${heading.text}" is too short (${heading.text.length} chars, min ${minHeadingLength})`
      );
    }
  });

  // Calculate entity density
  let headingsWithEntities = 0;
  const allMentionedEntities = new Set<string>();
  
  headings.forEach(heading => {
    if (heading.entities && heading.entities.length > 0) {
      headingsWithEntities++;
      heading.entities.forEach(entity => allMentionedEntities.add(entity.toLowerCase()));
    }
  });

  result.stats.entityDensity = headings.length > 0 
    ? headingsWithEntities / headings.length 
    : 0;

  if (result.stats.entityDensity < minEntityDensity) {
    result.warnings.push(
      `Entity density too low: ${(result.stats.entityDensity * 100).toFixed(1)}% (minimum ${(minEntityDensity * 100).toFixed(0)}%)`
    );
    result.recommendations.push('Include primary entities (business name, service, location) in more headings');
  }

  // Check for required entities
  requiredEntities.forEach(entity => {
    if (!allMentionedEntities.has(entity.toLowerCase())) {
      result.warnings.push(`Required entity "${entity}" not found in any heading`);
      result.recommendations.push(`Add "${entity}" to at least one heading for better entity recognition`);
    }
  });

  // Check for question-based headings (GEO best practice)
  if (checkQuestionFormat) {
    const questionHeadings = headings.filter(h => 
      h.level === 2 && (
        h.text.startsWith('How') ||
        h.text.startsWith('What') ||
        h.text.startsWith('Why') ||
        h.text.startsWith('When') ||
        h.text.startsWith('Where') ||
        h.text.includes('?')
      )
    );

    if (questionHeadings.length === 0 && result.stats.h2Count > 0) {
      result.recommendations.push('Consider using question-based H2 headings for better Answer Engine optimization');
    }
  }

  // GEO-specific recommendations
  if (result.stats.h2Count < 3) {
    result.recommendations.push('Add more H2 headings to structure content for AI scanning (minimum 3-5 recommended)');
  }

  if (result.stats.h3Count > 0 && result.stats.h2Count === 0) {
    result.errors.push('Cannot use H3 headings without H2 headings');
    result.isValid = false;
  }

  // Check H1 quality
  const h1 = headings.find(h => h.level === 1);
  if (h1) {
    // H1 should be substantial and entity-rich
    if (h1.text.length < 30) {
      result.warnings.push('H1 is too short - should be 30-70 characters for optimal GEO performance');
    }
    
    // H1 should contain primary entity
    if (requiredEntities.length > 0 && !h1.entities?.some(e => 
      requiredEntities.some(req => req.toLowerCase() === e.toLowerCase())
    )) {
      result.warnings.push('H1 should contain primary entity for better entity recognition');
    }

    // Check for Subject-Predicate-Object structure
    const hasClearStructure = h1.text.includes(' delivers ') || 
                              h1.text.includes(' provides ') || 
                              h1.text.includes(' offers ') ||
                              h1.text.includes(' helps ') ||
                              h1.text.includes(' specializes in ');
    
    if (!hasClearStructure) {
      result.recommendations.push('Consider using Subject-Predicate-Object structure in H1 (e.g., "Company delivers Service")');
    }
  }

  return result;
}

/**
 * Extract headings from HTML string
 */
export function extractHeadingsFromHTML(html: string): HeadingStructure[] {
  const headings: HeadingStructure[] = [];
  const headingRegex = /<h([1-6])[^>]*>(.*?)<\/h\1>/gi;
  
  let match;
  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2]
      .replace(/<[^>]+>/g, '') // Remove HTML tags
      .replace(/&nbsp;/g, ' ') // Replace &nbsp;
      .replace(/&amp;/g, '&') // Replace &amp;
      .replace(/&lt;/g, '<') // Replace &lt;
      .replace(/&gt;/g, '>') // Replace &gt;
      .trim();
    
    headings.push({ level, text });
  }
  
  return headings;
}

/**
 * Generate heading structure report
 */
export function generateHeadingReport(result: HeadingValidationResult): string {
  let report = '=== Heading Structure Analysis ===\n\n';
  
  report += 'STATISTICS:\n';
  report += `- Total Headings: ${result.stats.totalHeadings}\n`;
  report += `- H1: ${result.stats.h1Count}\n`;
  report += `- H2: ${result.stats.h2Count}\n`;
  report += `- H3: ${result.stats.h3Count}\n`;
  report += `- H4: ${result.stats.h4Count}\n`;
  report += `- H5: ${result.stats.h5Count}\n`;
  report += `- H6: ${result.stats.h6Count}\n`;
  report += `- Avg Length: ${result.stats.avgHeadingLength} characters\n`;
  report += `- Entity Density: ${(result.stats.entityDensity * 100).toFixed(1)}%\n\n`;
  
  if (result.errors.length > 0) {
    report += '❌ ERRORS:\n';
    result.errors.forEach(error => report += `- ${error}\n`);
    report += '\n';
  }
  
  if (result.warnings.length > 0) {
    report += '⚠️  WARNINGS:\n';
    result.warnings.forEach(warning => report += `- ${warning}\n`);
    report += '\n';
  }
  
  if (result.recommendations.length > 0) {
    report += '💡 RECOMMENDATIONS:\n';
    result.recommendations.forEach(rec => report += `- ${rec}\n`);
    report += '\n';
  }
  
  report += `STATUS: ${result.isValid ? '✅ VALID' : '❌ INVALID'}\n`;
  
  return report;
}

