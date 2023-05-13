import { Loader2 } from "lucide-react";

export default function Loading() {
    return <div className="flex  justify-center items-center h-full w-1/2">
              <Loader2 height={111} className="mr-2 h-4 w-4 animate-spin" />
    </div>
}