export default function TeamPage() {
  return (
    <div className="space-y-8">

      {/* Page Header */}

      <div>

        <h1
          className="
            text-4xl
            font-bold
            text-white
          "
        >
          Team
        </h1>

        <p
          className="
            mt-2
            text-slate-400
          "
        >
          Manage team members, roles and workspace access.
        </p>

      </div>



      {/* Team Members */}
      

      <section
        className="
          rounded-3xl
          border
          border-white/10
          bg-slate-900/60
          p-8
        "
      >

        <div
          className="
            flex
            items-center
            justify-between
          "
        >

          <div>

            <h2
              className="
                text-xl
                font-semibold
                text-white
              "
            >
              Team Members
            </h2>

            <p
              className="
                mt-2
                text-slate-400
              "
            >
              People with access to this workspace.
            </p>

          </div>

          <button
            className="
              rounded-xl

              bg-gradient-to-r
              from-cyan-500
              to-blue-600

              px-5
              py-3

              font-semibold
              text-white

              transition

              hover:scale-[1.02]
            "
          >
            + Invite Member
          </button>

        </div>



        <div
          className="
            mt-8
            overflow-hidden

            rounded-2xl

            border
            border-white/10
          "
        >

          <table className="w-full">

            <thead
              className="
                bg-slate-800/70
              "
            >

              <tr
                className="
                  text-left
                  text-sm
                  text-slate-400
                "
              >

                <th className="px-6 py-4">Member</th>

                <th className="px-6 py-4">Role</th>

                <th className="px-6 py-4">Status</th>

                <th className="px-6 py-4">Last Active</th>

                <th className="px-6 py-4 text-right">
                  Actions
                </th>

              </tr>

            </thead>



            <tbody>

              <tr
                className="
                  border-t
                  border-white/10
                "
              >

                <td className="px-6 py-5">

                  <div
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center

                        rounded-full

                        bg-cyan-500/20

                        font-bold
                        text-cyan-300
                      "
                    >
                      MK
                    </div>

                    <div>

                      <p className="font-semibold text-white">
                        Mohan Kumar
                      </p>

                      <p className="text-sm text-slate-400">
                        mohan@korevity.com
                      </p>

                    </div>

                  </div>

                </td>

                <td className="px-6 py-5 text-white">
                  Owner
                </td>

                <td className="px-6 py-5">

                  <span
                    className="
                      rounded-full

                      bg-emerald-500/20

                      px-3
                      py-1

                      text-sm
                      font-medium

                      text-emerald-400
                    "
                  >
                    Online
                  </span>

                </td>

                <td className="px-6 py-5 text-slate-400">
                  Active Now
                </td>

                <td className="px-6 py-5 text-right">

                  <button
                    className="
                      rounded-lg

                      border
                      border-white/10

                      px-4
                      py-2

                      text-sm
                      text-slate-300

                      transition

                      hover:border-cyan-400
                      hover:text-cyan-300
                    "
                  >
                    Manage
                  </button>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Invite Member */}

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
    Invite Member
  </h2>

  <p
    className="
      mt-2
      text-slate-400
    "
  >
    Invite teammates to collaborate in your workspace.
  </p>

  <div
    className="
      mt-8
      grid
      gap-6
      md:grid-cols-3
    "
  >

    <div>

      <label className="mb-2 block text-sm text-slate-400">
        Email Address
      </label>

      <input
        placeholder="john@example.com"
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
        <option>Admin</option>
        <option>Manager</option>
        <option>Viewer</option>
      </select>

    </div>

    <div
      className="
        flex
        items-end
      "
    >

      <button
        className="
          w-full

          rounded-xl

          bg-gradient-to-r
          from-cyan-500
          to-blue-600

          px-6
          py-3

          font-semibold
          text-white

          transition

          hover:scale-[1.02]
        "
      >
        Send Invitation
      </button>

    </div>

  </div>

</section>

{/* Pending Invitations */}

<section
  className="
    rounded-3xl
    border
    border-white/10
    bg-slate-900/60
    p-8
  "
>

  <div
    className="
      flex
      items-center
      justify-between
    "
  >

    <div>

      <h2
        className="
          text-xl
          font-semibold
          text-white
        "
      >
        Pending Invitations
      </h2>

      <p
        className="
          mt-2
          text-slate-400
        "
      >
        Invitations waiting to be accepted.
      </p>

    </div>

  </div>

  <div
    className="
      mt-8
      overflow-hidden

      rounded-2xl

      border
      border-white/10
    "
  >

    <table className="w-full">

      <thead className="bg-slate-800/70">

        <tr className="text-left text-sm text-slate-400">

          <th className="px-6 py-4">
            Email
          </th>

          <th className="px-6 py-4">
            Role
          </th>

          <th className="px-6 py-4">
            Invited
          </th>

          <th className="px-6 py-4">
            Status
          </th>

          <th className="px-6 py-4 text-right">
            Actions
          </th>

        </tr>

      </thead>

      <tbody>

        <tr className="border-t border-white/10">

          <td className="px-6 py-5 text-white">
            sarah@company.com
          </td>

          <td className="px-6 py-5 text-slate-300">
            Manager
          </td>

          <td className="px-6 py-5 text-slate-400">
            Today
          </td>

          <td className="px-6 py-5">

            <span
              className="
                rounded-full

                bg-yellow-500/20

                px-3
                py-1

                text-sm

                font-medium

                text-yellow-400
              "
            >
              Pending
            </span>

          </td>

          <td className="px-6 py-5 text-right">

            <button
              className="
                rounded-lg

                border
                border-red-500/20

                px-4
                py-2

                text-sm

                text-red-400

                transition

                hover:bg-red-500/10
              "
            >
              Cancel
            </button>

          </td>

        </tr>

      </tbody>

    </table>

  </div>

</section>

{/* Roles & Permissions */}

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
    Roles & Permissions
  </h2>

  <p
    className="
      mt-2
      text-slate-400
    "
  >
    Control what each role can access inside your workspace.
  </p>

  <div
    className="
      mt-8

      grid

      gap-6

      md:grid-cols-2

      xl:grid-cols-4
    "
  >

    {/* Owner */}

    <div
      className="
        rounded-2xl

        border
        border-cyan-500/20

        bg-cyan-500/5

        p-6
      "
    >

      <h3 className="text-lg font-semibold text-white">
        Owner
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        Full workspace access.
      </p>

      <ul
        className="
          mt-6
          space-y-2
          text-sm
          text-slate-300
        "
      >
        <li>✓ Manage Team</li>
        <li>✓ Billing</li>
        <li>✓ Analytics</li>
        <li>✓ Automations</li>
        <li>✓ AI Settings</li>
      </ul>

    </div>



    {/* Admin */}

    <div
      className="
        rounded-2xl

        border
        border-white/10

        bg-slate-800/50

        p-6
      "
    >

      <h3 className="text-lg font-semibold text-white">
        Admin
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        Manage workspace operations.
      </p>

      <ul
        className="
          mt-6
          space-y-2
          text-sm
          text-slate-300
        "
      >
        <li>✓ Team</li>
        <li>✓ Dashboards</li>
        <li>✓ Reports</li>
        <li>✓ AI Assistant</li>
      </ul>

    </div>



    {/* Manager */}

    <div
      className="
        rounded-2xl

        border
        border-white/10

        bg-slate-800/50

        p-6
      "
    >

      <h3 className="text-lg font-semibold text-white">
        Manager
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        Operational access.
      </p>

      <ul
        className="
          mt-6
          space-y-2
          text-sm
          text-slate-300
        "
      >
        <li>✓ Dashboards</li>
        <li>✓ Reports</li>
        <li>✓ Team View</li>
      </ul>

    </div>



    {/* Viewer */}

    <div
      className="
        rounded-2xl

        border
        border-white/10

        bg-slate-800/50

        p-6
      "
    >

      <h3 className="text-lg font-semibold text-white">
        Viewer
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        Read-only workspace access.
      </p>

      <ul
        className="
          mt-6
          space-y-2
          text-sm
          text-slate-300
        "
      >
        <li>✓ View Dashboards</li>
        <li>✓ View Reports</li>
      </ul>

    </div>

  </div>

</section>

{/* Recent Team Activity */}

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
    Recent Team Activity
  </h2>

  <p
    className="
      mt-2
      text-slate-400
    "
  >
    Latest actions performed by your workspace members.
  </p>

  <div className="mt-8 space-y-6">

    <div className="flex gap-5">

      <div className="mt-1 h-3 w-3 rounded-full bg-cyan-500"></div>

      <div>

        <p className="font-medium text-white">
          Mohan Kumar invited Sarah Johnson
        </p>

        <p className="mt-1 text-sm text-slate-400">
          5 minutes ago
        </p>

      </div>

    </div>



    <div className="flex gap-5">

      <div className="mt-1 h-3 w-3 rounded-full bg-emerald-500"></div>

      <div>

        <p className="font-medium text-white">
          Sarah Johnson accepted the invitation
        </p>

        <p className="mt-1 text-sm text-slate-400">
          12 minutes ago
        </p>

      </div>

    </div>



    <div className="flex gap-5">

      <div className="mt-1 h-3 w-3 rounded-full bg-blue-500"></div>

      <div>

        <p className="font-medium text-white">
          AI Manager role updated
        </p>

        <p className="mt-1 text-sm text-slate-400">
          1 hour ago
        </p>

      </div>

    </div>



    <div className="flex gap-5">

      <div className="mt-1 h-3 w-3 rounded-full bg-violet-500"></div>

      <div>

        <p className="font-medium text-white">
          Workspace permissions reviewed
        </p>

        <p className="mt-1 text-sm text-slate-400">
          Yesterday
        </p>

      </div>

    </div>

  </div>

</section>

    </div>
  );
}