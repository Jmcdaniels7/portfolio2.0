"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { TypewriterEffect } from "@/components/ui/Features/typewriter-effect";
import { InputWithButton } from "@/components/ui/Features/inputNbutton";
import SearchProjects from "@/components/ui/Features/searchProjects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Layout/tabs";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle }  from "@/components/ui/Layout/resizable";
import Image from "next/image";

export default function HeroSectionOne() {

  const [searchValue, setSearchValue] = useState("");

  return (
    <div
      className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <Navbar />
      <div
        className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div
          className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div
        className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div
          className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div
          className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      <div className="bg-[rgba(26,26,26,0.6)] backdrop-blur-[1.5px]">
        <div className="px-4 py-10 md:py-20">
        <h1
          className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl text-white">
          {"Full Stack Developer"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 3.5,
                  delay: index * 1.25,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block">
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 5.5,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 text-white">
          Computer Science @IU Indy | Java | Python | C++ | SQL | Node.js
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 6,
          }}

          className="relative z-10 mt-8 flex flex-wrap items-center justify-center">
          <Tabs defaultValue="Bio" className="relative z-10 mt-8 flex flex-wrap items-center justify-center">
            <TabsList>
              <TabsTrigger value="Bio" className="cursor-pointer">Bio</TabsTrigger>
              <TabsTrigger value="projects" className="cursor-pointer">Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="Bio">
                <ResizablePanelGroup
                  direction="horizontal"
                  className="min-h-[550px] max-w-md rounded-lg border md:min-w-[1200px]"
                >
                  <ResizablePanel defaultSize={25}>
                    <div className="flex flex-col h-full items-left justify-center p-6">
                      <span className=""><Image src="/ph1.jpg" alt="My photo" width={500} height={500}/></span>
                      <span className="font-semibold text-white  text-lg">Current Role: Data Analyst Intern</span>
                      <span className="font-semibold text-white  text-lg">School Year: Junior</span>
                      <span className="font-semibold text-white  text-lg">Looking for: Software Engineering and Data Analytics Roles</span><br></br>
                      
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={75}>
                    // needed flex flex-col here to make vertically paragrpahed text
                    <div className="flex flex-col h-full items-left justify-left p-6">
                      <span className="font-semibold text-white  text-2xl">Technical Skills</span><br></br>
                      <p><span className="font-semibold text-white text-left text-lg">Languages: Java, C++, Python,
                      JavaScript, TypeScript, SQL </span></p><br></br>
                      <p><span className="font-semibold text-white text-left text-lg">Frameworks/Technologies: Node.js,
                         React, Next.js, Angular, Spring Boot, Django</span></p> <br></br>
                      <p><span className="font-semibold text-white text-left text-lg">Databases: PostgreSQL, Oracle, 
                        CosmosDB, Google Cloud SQL</span></p><br></br>
                      <p><span className="font-semibold text-white text-left text-lg">Cloud Platforms: Microsoft Azure, 
                        AWS, Render, Google Cloud, Vercel, GithubPages</span></p><br></br>
                      <p><span className="font-semibold text-white text-left text-lg">Tools: Postman, PostgreAdmin4, 
                        DjangoAdmin, Docker, Git, Github, Trello
                         </span></p><br></br>
                      <p><span className="font-semibold text-white text-left text-lg">Other: RESTful APIs, Agile Methodologies</span></p>
                      
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              
            </TabsContent>
            <TabsContent value="projects" classname="relative z-10 mt-8 flex flex-wrap items-center justify-center">
               
               <div className="flex flex-col h-full items-center justify-center p-6">
                    <span className="font-semibold text-white  text-2xl">Search Projects by Language or Framework</span><br></br>
                    <InputWithButton onSearch={setSearchValue} />
               </div>
              
              <SearchProjects query={searchValue} />

            </TabsContent>
            <TabsContent value="resume" classname="relative z-10 mt-8 flex flex-wrap items-center justify-center">
               
               

            </TabsContent>
          </Tabs>

        </motion.div>
        </div>
  
      </div>

    </div>
  );
}

const Navbar = () => {
  return (

    
    <nav
      className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div
          className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl">
          <div >
            <TypewriterEffect words={[{ text: "Jacob McDaniels"}]} />
          </div>
        </h1>
      </div>
      
    </nav>
  );
};
