/**
 * Admin Settings Page
 * Configure automation, AI models, and prompts
 */

import { redirect } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { blogDb } from '@/lib/supabase-admin';
import Link from 'next/link';

export default async function AdminSettingsPage() {
  // Check authentication
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    redirect('/admin');
  }

  // Load current settings
  const settings = await blogDb.getSettings();
  const schedule = await blogDb.getSchedule();

  async function updateSchedule(formData: FormData) {
    'use server';
    
    const enabled = formData.get('enabled') === 'on';
    const themes = formData.get('themes') as string;
    const frequency = formData.get('frequency') as string;
    const posts_per_run = parseInt(formData.get('posts_per_run') as string);
    const auto_publish = formData.get('auto_publish') === 'on';

    await blogDb.updateSchedule({
      enabled,
      themes,
      frequency,
      posts_per_run,
      auto_publish,
    });

    redirect('/admin/settings?updated=schedule');
  }

  async function updateAISettings(formData: FormData) {
    'use server';
    
    const gpt_model = formData.get('gpt_model') as string;
    const gpt_temperature = formData.get('gpt_temperature') as string;
    const dalle_model = formData.get('dalle_model') as string;
    const dalle_size = formData.get('dalle_size') as string;

    await blogDb.updateSetting('gpt_model', gpt_model);
    await blogDb.updateSetting('gpt_temperature', gpt_temperature);
    await blogDb.updateSetting('dalle_model', dalle_model);
    await blogDb.updateSetting('dalle_size', dalle_size);

    redirect('/admin/settings?updated=ai');
  }

  async function updatePrompts(formData: FormData) {
    'use server';
    
    const gpt_system_message = formData.get('gpt_system_message') as string;
    const gpt_user_prompt_template = formData.get('gpt_user_prompt_template') as string;
    const dalle_prompt_template = formData.get('dalle_prompt_template') as string;

    await blogDb.updateSetting('gpt_system_message', gpt_system_message);
    await blogDb.updateSetting('gpt_user_prompt_template', gpt_user_prompt_template);
    await blogDb.updateSetting('dalle_prompt_template', dalle_prompt_template);

    redirect('/admin/settings?updated=prompts');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Header */}
      <header className="bg-white/5 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/admin/dashboard"
              className="text-gray-400 hover:text-white transition-colors"
            >
              ← Back
            </Link>
            <h1 className="text-2xl font-bold text-white">
              ⚙️ Settings
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Schedule Configuration */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span>📅</span> Schedule Configuration
          </h2>
          
          <form action={updateSchedule} className="space-y-6">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="enabled"
                name="enabled"
                defaultChecked={schedule?.enabled}
                className="w-5 h-5 rounded bg-white/10 border-white/20"
              />
              <label htmlFor="enabled" className="text-white font-medium">
                Enable Automation
              </label>
            </div>

            <div>
              <label htmlFor="themes" className="block text-sm font-medium text-gray-200 mb-2">
                Blog Themes (comma-separated)
              </label>
              <textarea
                id="themes"
                name="themes"
                rows={3}
                defaultValue={schedule?.themes}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="AI Search, SEO Evolution, AIO..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="frequency" className="block text-sm font-medium text-gray-200 mb-2">
                  Frequency
                </label>
                <select
                  id="frequency"
                  name="frequency"
                  defaultValue={schedule?.frequency}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>

              <div>
                <label htmlFor="posts_per_run" className="block text-sm font-medium text-gray-200 mb-2">
                  Posts Per Run
                </label>
                <input
                  type="number"
                  id="posts_per_run"
                  name="posts_per_run"
                  min="1"
                  max="5"
                  defaultValue={schedule?.posts_per_run}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="auto_publish"
                name="auto_publish"
                defaultChecked={schedule?.auto_publish}
                className="w-5 h-5 rounded bg-white/10 border-white/20"
              />
              <label htmlFor="auto_publish" className="text-white font-medium">
                Auto-publish to Sanity CMS
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Save Schedule Settings
            </button>
          </form>
        </div>

        {/* AI Model Settings */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span>🤖</span> AI Model Configuration
          </h2>
          
          <form action={updateAISettings} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="gpt_model" className="block text-sm font-medium text-gray-200 mb-2">
                  GPT Model
                </label>
                <select
                  id="gpt_model"
                  name="gpt_model"
                  defaultValue={settings?.gpt_model}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="gpt-4o">GPT-4o (Recommended)</option>
                  <option value="gpt-4o-mini">GPT-4o Mini (Cheaper)</option>
                  <option value="gpt-4-turbo">GPT-4 Turbo</option>
                </select>
              </div>

              <div>
                <label htmlFor="gpt_temperature" className="block text-sm font-medium text-gray-200 mb-2">
                  Temperature (0-1)
                </label>
                <input
                  type="number"
                  id="gpt_temperature"
                  name="gpt_temperature"
                  step="0.1"
                  min="0"
                  max="1"
                  defaultValue={settings?.gpt_temperature}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="dalle_model" className="block text-sm font-medium text-gray-200 mb-2">
                  DALL-E Model
                </label>
                <select
                  id="dalle_model"
                  name="dalle_model"
                  defaultValue={settings?.dalle_model}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="dall-e-3">DALL-E 3</option>
                  <option value="dall-e-2">DALL-E 2</option>
                </select>
              </div>

              <div>
                <label htmlFor="dalle_size" className="block text-sm font-medium text-gray-200 mb-2">
                  Image Size
                </label>
                <select
                  id="dalle_size"
                  name="dalle_size"
                  defaultValue={settings?.dalle_size}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="1792x1024">1792x1024 (Wide)</option>
                  <option value="1024x1792">1024x1792 (Tall)</option>
                  <option value="1024x1024">1024x1024 (Square)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all"
            >
              Save AI Settings
            </button>
          </form>
        </div>

        {/* AI Prompts */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span>✍️</span> AI Prompts
          </h2>
          
          <form action={updatePrompts} className="space-y-6">
            <div>
              <label htmlFor="gpt_system_message" className="block text-sm font-medium text-gray-200 mb-2">
                GPT System Message
              </label>
              <textarea
                id="gpt_system_message"
                name="gpt_system_message"
                rows={4}
                defaultValue={settings?.gpt_system_message}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              />
            </div>

            <div>
              <label htmlFor="gpt_user_prompt_template" className="block text-sm font-medium text-gray-200 mb-2">
                GPT User Prompt Template (use {'{topic}'} placeholder)
              </label>
              <textarea
                id="gpt_user_prompt_template"
                name="gpt_user_prompt_template"
                rows={6}
                defaultValue={settings?.gpt_user_prompt_template}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              />
            </div>

            <div>
              <label htmlFor="dalle_prompt_template" className="block text-sm font-medium text-gray-200 mb-2">
                DALL-E Prompt Template (use {'{topic}'} placeholder)
              </label>
              <textarea
                id="dalle_prompt_template"
                name="dalle_prompt_template"
                rows={3}
                defaultValue={settings?.dalle_prompt_template}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-pink-700 transition-all"
            >
              Save Prompt Settings
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

