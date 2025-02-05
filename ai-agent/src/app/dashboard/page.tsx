import { BotIcon, UserIcon , BotMessageSquare,LucideBookTemplate} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex-1 flex items-center justify-center p-10">
      <div className="relative max-w-5xl w-full">
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-200 to-gray-80/80 rounded-3xl"></div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:4rem_4rem] rounded-3xl"></div>

        <div className="relative space-y-6 p-8 text-center">
          <div className="bg-white/60 backdrop-blur-sm shadow-sm ring-1 ring-gray-200/50 rounded-2xl p-6 space-y-4">
          <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-4 inline-flex">
              <BotMessageSquare className="w-20 h-20 text-gray-700" />
            </div>
            <h2 className="text-2xl font-semibold bg-gradient-to-br from-gray-900 to-gray-300 bg-clip-text text-transparent">
              Welcome to the AI Agent Chat
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Start a new conversation <br/>
               select an existing chat from the
              sidebar.
            </p>
            <div className="pt-3 flex justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                Real-time responses
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                Powerful tools
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                Instant notifications
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                Enhanced security
              </div>
             </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}