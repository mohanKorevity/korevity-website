export default function ProfilePage() {
  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Profile
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your personal information and account settings.
        </p>
      </div>

      {/* Personal Information */}
      {/* Personal Information */}

<section
  className="
    rounded-3xl
    border
    border-white/10
    bg-slate-900/60
    p-8
  "
>

  <h2 className="text-xl font-semibold text-white">
    Personal Information
  </h2>

  <p className="mt-2 text-slate-400">
    Update your personal details.
  </p>


  <div
    className="
      mt-8

      grid

      gap-8

      lg:grid-cols-[180px_1fr]
    "
  >

    {/* Avatar */}

    <div
      className="
        flex
        flex-col
        items-center
      "
    >

      <div
        className="
          flex

          h-36
w-36

          items-center
          justify-center

          rounded-full

          border
border-cyan-400/40
shadow-lg
shadow-cyan-500/10

          bg-slate-800

          text-5xl
          font-bold
          text-cyan-300
        "
      >
        MK
      </div>

      <button
        className="
          mt-5

          rounded-xl

          border
          border-cyan-400/20

          bg-cyan-500/10

          px-5
          py-2

          text-sm
          font-medium

          text-cyan-300

          transition

          hover:bg-cyan-500/20
        "
      >
        Change Photo
      </button>

    </div>





    {/* Form */}

    <div
      className="
        grid
        gap-6

        md:grid-cols-2
      "
    >

      <div>

        <label className="mb-2 block text-sm text-slate-400">
          Full Name
        </label>

        <input
          defaultValue="Mohan Kumar"
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
focus:ring-2
focus:ring-cyan-500/20
          "
        />

      </div>



      <div>

        <label className="mb-2 block text-sm text-slate-400">
          Email
        </label>

        <input
          defaultValue="mohan@korevity.com"
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
          Company
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
          Role
        </label>

        <input
          defaultValue="Founder & Managing Director"
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



      {/* Save Changes */}





      

    </div>

  </div>

</section>

      {/* Security */}
      {/* Security */}

<section
  className="
    rounded-3xl
    border
    border-white/10
    bg-slate-900/60
    p-8
  "
>

  <h2 className="text-xl font-semibold text-white">
    Security
  </h2>

  <p className="mt-2 text-slate-400">
    Protect your account and manage authentication.
  </p>

  <div className="mt-8 space-y-6">

    {/* Password */}

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
          Password
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Last updated 42 days ago.
        </p>

      </div>

      <button
        className="
          rounded-xl

          border
          border-cyan-400/20

          bg-cyan-500/10

          px-5
          py-2

          font-medium

          text-cyan-300

          transition

          hover:bg-cyan-500/20
        "
      >
        Change Password
      </button>

    </div>

    {/* Two Factor */}

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
          Two-Factor Authentication
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Add another layer of security to your account.
        </p>

      </div>

      <button
        className="
          rounded-xl

          bg-gradient-to-r
          from-cyan-500
          to-blue-600

          px-5
          py-2

          font-semibold
          text-white

          transition

          hover:scale-[1.02]
        "
      >
        Enable
      </button>

    </div>

    {/* Login Activity */}

    <div
      className="
        rounded-2xl

        border
        border-white/10

        bg-slate-800/50

        p-5
      "
    >

      <h3 className="font-semibold text-white">
        Recent Login
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        Windows • Chrome • Bengaluru, India
      </p>

      <p className="mt-1 text-xs text-slate-500">
        Active now
      </p>

    </div>

  </div>

</section>

      {/* Preferences */}
      {/* Preferences */}

<section
  className="
    rounded-3xl
    border
    border-white/10
    bg-slate-900/60
    p-8
  "
>

  <h2 className="text-xl font-semibold text-white">
    Preferences
  </h2>

  <p className="mt-2 text-slate-400">
    Customize your workspace experience.
  </p>

  <div className="mt-8 space-y-6">

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
          Dark mode is currently enabled.
        </p>

      </div>

      <button
        className="
          rounded-xl

          border
          border-cyan-400/20

          bg-cyan-500/10

          px-5
          py-2

          font-medium

          text-cyan-300

          transition

          hover:bg-cyan-500/20
        "
      >
        Dark
      </button>

    </div>

    {/* Language */}

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
          Language
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Dashboard language.
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
        <option>English</option>
        <option>Spanish</option>
        <option>French</option>
      </select>

    </div>

    {/* Email Notifications */}

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
          Receive updates and system alerts.
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

    {/* AI Personalization */}

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
          AI Personalization
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Allow AI to personalize recommendations.
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

      {/* Danger Zone */}
      {/* Danger Zone */}

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
    Danger Zone
  </h2>

  <p
    className="
      mt-2
      text-slate-400
    "
  >
    These actions are permanent and cannot be undone.
  </p>

  <div
    className="
      mt-8
      space-y-6
    "
  >

    {/* Export Data */}

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
          Export Account Data
        </h3>

        <p
          className="
            mt-1
            text-sm
            text-slate-400
          "
        >
          Download all of your account information.
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



    {/* Delete Account */}

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
          Delete Account
        </h3>

        <p
          className="
            mt-1
            text-sm
            text-slate-400
          "
        >
          Permanently remove your account and all associated data.
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
        Delete
      </button>

    </div>

  </div>

</section>

<div className="md:col-span-2 flex justify-end pt-2">
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

      transition-all
      duration-300

      hover:scale-[1.02]
      hover:shadow-lg
      hover:shadow-cyan-500/20
    "
  >
    Save Changes
  </button>
</div>

</div>
  );
}