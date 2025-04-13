<script lang="ts">
    type Experience = {
      title: string;
      company: string;
      period: string;
      isVerified?: boolean;
      description?: string;
      skills?: string[];
    };
    
    const experiences: Experience[] = [
      {
        title: "Software Engineer (Fullstack)",
        company: "2077 Research",
        period: "Present",
        isVerified: false,
        description: "Building and maintaining full-stack applications with modern technologies.",
        skills: ["TypeScript", "React", "Node.js", "PostgreSQL"]
      },
      {
        title: "Technical Writer (Freelance)",
        company: "Tiiny Host",
        period: "2024",
        isVerified: false,
        description: "Created technical documentation and tutorials for web hosting products.",
        skills: ["Technical Writing", "Markdown", "Documentation", "Web Hosting"]
      },
      {
        title: "Fullstack Developer",
        company: "Omoo Web Studio",
        period: "2023",
        isVerified: false,
        description: "Created technical documentation and tutorials for web hosting products.",
        skills: ["Technical Writing", "Markdown", "Documentation", "Web Hosting"]
      },
      {
        title: "Software Developer (Front-end)",
        company: "Kozy Agencies",
        period: "2022",
        isVerified: false,
        description: "Assisted in developing web applications and learning modern frameworks.",
        skills: ["JavaScript", "React", "Node.js"]
      },
      {
        title: "Software Developer (Front-end)",
        company: "Weloin Global Private Ltd",
        period: "2021",
        isVerified: false,
        description: "Developed responsive web interfaces and improved UI/UX for client projects.",
        skills: ["JavaScript", "HTML", "CSS", "React"]
      },
    ];
    
    let expandedIndex: number | null = null;
    
    function toggleExpand(index: number) {
      expandedIndex = expandedIndex === index ? null : index;
    }
  
    function handleKeydown(event: KeyboardEvent, index: number) {
      if (event.key === 'Enter' || event.key === ' ') {
        toggleExpand(index);
        event.preventDefault();
      }
    }
  </script>
  
  <section class="mx-auto flex flex-col gap-y-4 sm:w-full md:w-2xl ">
    <h2 class="text-sm text-gray-500 mb-2">Experience</h2>
  
    <ul class="flex flex-col space-y-1">
      {#each experiences as experience, index}
        <li class="w-full">
          <button 
            type="button"
            class="flex justify-between items-center w-full text-left py-2 px-1 transition-colors hover:bg-gray-300/20 focus:outline-none focus:ring-1 focus:ring-gray-300 rounded"
            on:click={() => toggleExpand(index)}
            on:keydown={(e) => handleKeydown(e, index)}
            aria-expanded={expandedIndex === index}
          >
            <div class="flex items-center gap-3 w-1/2">
              <span class={`transform transition-transform ${expandedIndex === index ? 'rotate-90' : ''}`} aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
              <h3 class="text-sm font-medium">{experience.title}</h3>
            </div>
            
            <div class="w-1/4 text-sm">{experience.company}</div>
            
            <div class="flex items-center justify-end gap-2 w-1/4">
              <p class="text-xs text-gray-500">{experience.period}</p>
              {#if experience.isVerified}
                <span class="bg-green-500 h-5 w-5 rounded-sm flex items-center justify-center" aria-label="Verified">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
              {/if}
            </div>
          </button>
          
          {#if expandedIndex === index && experience.description}
            <div class="pl-8 py-2 pr-4 transition-all duration-200 ease-in-out text-gray-300">
              <p class="text-sm mb-2">{experience.description}</p>
              {#if experience.skills && experience.skills.length > 0}
                <div class="flex flex-wrap gap-2 mt-1">
                  {#each experience.skills as skill}
                    <span class="text-xs text-gray-400">{skill}</span>
                  {/each}
                </div>
              {/if}
            </div>
          {/if}
        </li>
      {/each}
    </ul>
  </section>