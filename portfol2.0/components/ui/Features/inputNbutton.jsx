import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2 text-white">
      <Input type="project" placeholder="Java, Angular, React Native, etc." />
      <Button type="submit" variant="outline">
        <div className="text-black" >
            Search
        </div>
      </Button>
    </div>
  )
}
