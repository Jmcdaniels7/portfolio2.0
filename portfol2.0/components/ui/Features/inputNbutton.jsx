"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InputWithButton({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault(); // prevent page reload
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full max-w-sm items-center gap-2 text-white"
    >
      <Input
        type="text"
        placeholder="Java, Angular, React Native, etc."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        
      />
      <Button type="submit" variant="outline">
        <div className="text-black">Search</div>
      </Button>
    </form>
  );
}

