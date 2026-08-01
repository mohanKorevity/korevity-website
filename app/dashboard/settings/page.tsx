export default function SettingsPage() {

  return (

    <div className="space-y-8">

      <div>

        <h1
          className="
            text-4xl
            font-bold
            text-white
          "
        >
          Settings
        </h1>

        <p
          className="
            mt-2
            text-slate-400
          "
        >
          Configure your workspace, AI and application preferences.
        </p>

      </div>



      {/* General */}

<section
  className="
    rounded-3xl
    border
    border-white/10
    bg-slate-900/60
    p-8
  "
>

  <h2
    className="
      text-xl
      font-semibold
      text-white
    "
  >
    General
  </h2>

  <p
    className="
      mt-2
      text-slate-400
    "
  >
    Configure your workspace information.
  </p>

  <div
    className="
      mt-8

      grid

      gap-6

      md:grid-cols-2
    "
  >

    <div>

      <label className="mb-2 block text-sm text-slate-400">
        Workspace Name
      </label>

      <input
        defaultValue="KoreVity Business Intelligence"
        className="
          w-full

          rounded-xl

          border
          border-white/10

          bg-slate-800/70

          px-4
          py-3

          outline-none

          transition

          focus:border-cyan-400
        "
      />

    </div>





    <div>

      <label className="mb-2 block text-sm text-slate-400">
        Company Name
      </label>

      <input
        defaultValue="KoreVity"
        className="
          w-full

          rounded-xl

          border
          border-white/10

          bg-slate-800/70

          px-4
          py-3

          outline-none

          transition

          focus:border-cyan-400
        "
      />

    </div>





    <div>

      <label className="mb-2 block text-sm text-slate-400">
        Time Zone
      </label>

      <select
        className="
          w-full

          rounded-xl

          border
          border-white/10

          bg-slate-800/70

          px-4
          py-3

          text-white

          outline-none
        "
      >

        <option>
          Asia/Kolkata
        </option>

        <option>
          UTC
        </option>

        <option>
          America/New_York
        </option>

      </select>

    </div>





    <div>

      <label className="mb-2 block text-sm text-slate-400">
        Currency
      </label>

      <select
        className="
          w-full

          rounded-xl

          border
          border-white/10

          bg-slate-800/70

          px-4
          py-3

          text-white

          outline-none
        "
      >

        <option>USD ($)</option>

        <option>INR (₹)</option>

        <option>EUR (€)</option>

      </select>

    </div>





    <div className="md:col-span-2">

      <button
        className="
          rounded-xl

          bg-gradient-to-r
          from-cyan-500
          to-blue-600

          px-8
          py-3

          font-semibold
          text-white

          transition

          hover:scale-[1.02]
        "
      >
        Save Workspace Settings
      </button>

    </div>

  </div>

</section> 



      {/* Appearance */}

<section
  className="
    rounded-3xl
    border
    border-white/10
    bg-slate-900/60
    p-8
  "
>

  <h2
    className="
      text-xl
      font-semibold
      text-white
    "
  >
    Appearance
  </h2>

  <p
    className="
      mt-2
      text-slate-400
    "
  >
    Customize how your dashboard looks.
  </p>

  <div
    className="
      mt-8
      space-y-6
    "
  >

    {/* Theme */}

    <div
      className="
        flex
        items-center
        justify-between

        rounded-2xl

        border
        border-white/10

        bg-slate-800/50

        p-5
      "
    >

      <div>

        <h3 className="font-semibold text-white">
          Theme
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Select your preferred dashboard theme.
        </p>

      </div>

      <select
        className="
          rounded-xl

          border
          border-white/10

          bg-slate-900

          px-4
          py-2

          text-white

          outline-none
        "
      >
        <option>Dark</option>
        <option>Light</option>
        <option>System</option>
      </select>

    </div>



    {/* Accent Color */}

    <div
      className="
        flex
        items-center
        justify-between

        rounded-2xl

        border
        border-white/10

        bg-slate-800/50

        p-5
      "
    >

      <div>

        <h3 className="font-semibold text-white">
          Accent Color
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Personalize the dashboard highlight color.
        </p>

      </div>

      <div className="flex gap-3">

        <div className="h-8 w-8 rounded-full bg-cyan-500 ring-2 ring-white"></div>

        <div className="h-8 w-8 rounded-full bg-blue-600"></div>

        <div className="h-8 w-8 rounded-full bg-violet-600"></div>

        <div className="h-8 w-8 rounded-full bg-emerald-500"></div>

      </div>

    </div>



    {/* Sidebar */}

    <div
      className="
        flex
        items-center
        justify-between

        rounded-2xl

        border
        border-white/10

        bg-slate-800/50

        p-5
      "
    >

      <div>

        <h3 className="font-semibold text-white">
          Sidebar
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Choose your preferred navigation style.
        </p>

      </div>

      <select
        className="
          rounded-xl

          border
          border-white/10

          bg-slate-900

          px-4
          py-2

          text-white

          outline-none
        "
      >
        <option>Expanded</option>
        <option>Collapsed</option>
      </select>

    </div>

  </div>

</section>  



      {/* Notifications */}

<section
  className="
    rounded-3xl
    border
    border-white/10
    bg-slate-900/60
    p-8
  "
>

  <h2
    className="
      text-xl
      font-semibold
      text-white
    "
  >
    Notifications
  </h2>

  <p
    className="
      mt-2
      text-slate-400
    "
  >
    Choose which updates you want to receive.
  </p>

  <div
    className="
      mt-8
      space-y-5
    "
  >

    {/* Email */}

    <div
      className="
        flex
        items-center
        justify-between

        rounded-2xl

        border
        border-white/10

        bg-slate-800/50

        p-5
      "
    >

      <div>

        <h3 className="font-semibold text-white">
          Email Notifications
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Receive important updates by email.
        </p>

      </div>

      <button
        className="
          rounded-full

          bg-cyan-500

          px-4
          py-2

          text-sm
          font-semibold
          text-white
        "
      >
        Enabled
      </button>

    </div>



    {/* AI Alerts */}

    <div
      className="
        flex
        items-center
        justify-between

        rounded-2xl

        border
        border-white/10

        bg-slate-800/50

        p-5
      "
    >

      <div>

        <h3 className="font-semibold text-white">
          AI Alerts
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Get notified when AI detects insights.
        </p>

      </div>

      <button
        className="
          rounded-full

          bg-cyan-500

          px-4
          py-2

          text-sm
          font-semibold
          text-white
        "
      >
        Enabled
      </button>

    </div>



    {/* Automation Alerts */}

    <div
      className="
        flex
        items-center
        justify-between

        rounded-2xl

        border
        border-white/10

        bg-slate-800/50

        p-5
      "
    >

      <div>

        <h3 className="font-semibold text-white">
          Automation Alerts
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Receive notifications for workflow failures.
        </p>

      </div>

      <button
        className="
          rounded-full

          bg-slate-700

          px-4
          py-2

          text-sm
          font-semibold
          text-white
        "
      >
        Disabled
      </button>

    </div>



    {/* Weekly Reports */}

    <div
      className="
        flex
        items-center
        justify-between

        rounded-2xl

        border
        border-white/10

        bg-slate-800/50

        p-5
      "
    >

      <div>

        <h3 className="font-semibold text-white">
          Weekly Reports
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Receive a weekly performance summary.
        </p>

      </div>

      <button
        className="
          rounded-full

          bg-cyan-500

          px-4
          py-2

          text-sm
          font-semibold
          text-white
        "
      >
        Enabled
      </button>

    </div>

  </div>

</section>



      {/* AI Preferences */}

      {/* AI Preferences */}

<section
  className="
    rounded-3xl
    border
    border-white/10
    bg-slate-900/60
    p-8
  "
>

  <h2
    className="
      text-xl
      font-semibold
      text-white
    "
  >
    AI Preferences
  </h2>

  <p
    className="
      mt-2
      text-slate-400
    "
  >
    Configure how KoreVity AI assists your business.
  </p>

  <div
    className="
      mt-8
      grid
      gap-6
      md:grid-cols-2
    "
  >

    {/* AI Model */}

    <div>

      <label className="mb-2 block text-sm text-slate-400">
        AI Model
      </label>

      <select
        className="
          w-full

          rounded-xl

          border
          border-white/10

          bg-slate-800/70

          px-4
          py-3

          text-white

          outline-none
        "
      >
        <option>GPT-5.5</option>
        <option>Claude</option>
        <option>Gemini</option>
      </select>

    </div>



    {/* Creativity */}

    <div>

      <label className="mb-2 block text-sm text-slate-400">
        Response Style
      </label>

      <select
        className="
          w-full

          rounded-xl

          border
          border-white/10

          bg-slate-800/70

          px-4
          py-3

          text-white

          outline-none
        "
      >
        <option>Balanced</option>
        <option>Creative</option>
        <option>Precise</option>
      </select>

    </div>



    {/* Business Memory */}

    <div
      className="
        md:col-span-2

        flex
        items-center
        justify-between

        rounded-2xl

        border
        border-white/10

        bg-slate-800/50

        p-5
      "
    >

      <div>

        <h3 className="font-semibold text-white">
          Business Memory
        </h3>

        <p
          className="
            mt-1
            text-sm
            text-slate-400
          "
        >
          Allow AI to remember your company context for better responses.
        </p>

      </div>

      <button
        className="
          rounded-full

          bg-cyan-500

          px-4
          py-2

          text-sm
          font-semibold

          text-white
        "
      >
        Enabled
      </button>

    </div>



    {/* AI Suggestions */}

    <div
      className="
        md:col-span-2

        flex
        items-center
        justify-between

        rounded-2xl

        border
        border-white/10

        bg-slate-800/50

        p-5
      "
    >

      <div>

        <h3 className="font-semibold text-white">
          Proactive AI Suggestions
        </h3>

        <p
          className="
            mt-1
            text-sm
            text-slate-400
          "
        >
          Let AI recommend dashboards, reports and automations.
        </p>

      </div>

      <button
        className="
          rounded-full

          bg-cyan-500

          px-4
          py-2

          text-sm
          font-semibold

          text-white
        "
      >
        Enabled
      </button>

    </div>



    {/* AI Summary */}

    <div
      className="
        md:col-span-2

        rounded-2xl

        border
        border-cyan-500/20

        bg-cyan-500/5

        p-5
      "
    >

      <h3
        className="
          font-semibold
          text-cyan-300
        "
      >
        AI Status
      </h3>

      <p
        className="
          mt-2
          text-sm
          text-slate-400
        "
      >
        KoreVity AI is configured for business intelligence,
        dashboard insights and workflow automation.
      </p>

    </div>

  </div>

</section>



      {/* Integrations */}

<section
  className="
    rounded-3xl
    border
    border-white/10
    bg-slate-900/60
    p-8
  "
>

  <h2
    className="
      text-xl
      font-semibold
      text-white
    "
  >
    Integrations
  </h2>

  <p
    className="
      mt-2
      text-slate-400
    "
  >
    Connect KoreVity with your business tools.
  </p>

  <div
    className="
      mt-8
      space-y-5
    "
  >

    {/* Power BI */}

    <div
      className="
        flex
        items-center
        justify-between

        rounded-2xl

        border
        border-white/10

        bg-slate-800/50

        p-5
      "
    >

      <div>

        <h3 className="font-semibold text-white">
          Microsoft Power BI
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Connected to business dashboards.
        </p>

      </div>

      <button
        className="
          rounded-full

          bg-emerald-500

          px-4
          py-2

          text-sm
          font-semibold
          text-white
        "
      >
        Connected
      </button>

    </div>



    {/* Make */}

    <div
      className="
        flex
        items-center
        justify-between

        rounded-2xl

        border
        border-white/10

        bg-slate-800/50

        p-5
      "
    >

      <div>

        <h3 className="font-semibold text-white">
          Make.com
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Automation workflows.
        </p>

      </div>

      <button
        className="
          rounded-full

          bg-emerald-500

          px-4
          py-2

          text-sm
          font-semibold
          text-white
        "
      >
        Connected
      </button>

    </div>



    {/* Slack */}

    <div
      className="
        flex
        items-center
        justify-between

        rounded-2xl

        border
        border-white/10

        bg-slate-800/50

        p-5
      "
    >

      <div>

        <h3 className="font-semibold text-white">
          Slack
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Receive AI and workflow notifications.
        </p>

      </div>

      <button
        className="
          rounded-full

          bg-slate-700

          px-4
          py-2

          text-sm
          font-semibold
          text-white
        "
      >
        Connect
      </button>

    </div>



    {/* Microsoft Teams */}

    <div
      className="
        flex
        items-center
        justify-between

        rounded-2xl

        border
        border-white/10

        bg-slate-800/50

        p-5
      "
    >

      <div>

        <h3 className="font-semibold text-white">
          Microsoft Teams
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Share reports with your organization.
        </p>

      </div>

      <button
        className="
          rounded-full

          bg-slate-700

          px-4
          py-2

          text-sm
          font-semibold
          text-white
        "
      >
        Connect
      </button>

    </div>

  </div>

</section>



      {/* Advanced */}

      {/* Advanced */}

<section
  className="
    rounded-3xl
    border
    border-red-500/20
    bg-red-500/5
    p-8
  "
>

  <h2
    className="
      text-xl
      font-semibold
      text-red-400
    "
  >
    Advanced
  </h2>

  <p
    className="
      mt-2
      text-slate-400
    "
  >
    Manage exports, backups and workspace reset.
  </p>

  <div
    className="
      mt-8
      space-y-5
    "
  >

    {/* Export */}

    <div
      className="
        flex
        items-center
        justify-between

        rounded-2xl

        border
        border-white/10

        bg-slate-800/50

        p-5
      "
    >

      <div>

        <h3 className="font-semibold text-white">
          Export Workspace
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Download all dashboard settings and configuration.
        </p>

      </div>

      <button
        className="
          rounded-xl

          border
          border-white/10

          px-5
          py-2

          text-white

          transition

          hover:border-cyan-400
          hover:text-cyan-300
        "
      >
        Export
      </button>

    </div>



    {/* Backup */}

    <div
      className="
        flex
        items-center
        justify-between

        rounded-2xl

        border
        border-white/10

        bg-slate-800/50

        p-5
      "
    >

      <div>

        <h3 className="font-semibold text-white">
          Backup Configuration
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Create a secure backup of your workspace.
        </p>

      </div>

      <button
        className="
          rounded-xl

          border
          border-white/10

          px-5
          py-2

          text-white

          transition

          hover:border-cyan-400
          hover:text-cyan-300
        "
      >
        Backup
      </button>

    </div>



    {/* Reset */}

    <div
      className="
        flex
        items-center
        justify-between

        rounded-2xl

        border
        border-red-500/20

        bg-red-500/10

        p-5
      "
    >

      <div>

        <h3
          className="
            font-semibold
            text-red-400
          "
        >
          Reset Workspace
        </h3>

        <p
          className="
            mt-1
            text-sm
            text-slate-400
          "
        >
          Remove all dashboards, automations and settings.
        </p>

      </div>

      <button
        className="
          rounded-xl

          bg-red-500

          px-5
          py-2

          font-semibold
          text-white

          transition

          hover:bg-red-600
        "
      >
        Reset
      </button>

    </div>

  </div>

</section>

    </div>

  );

}