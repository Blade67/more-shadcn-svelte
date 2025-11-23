<script lang="ts">
    import * as DocPage from "$lib/components/feature/doc-page";
    import { Button } from "$lib/components/ui/button";
    import { ArrowRight, Box, Copy, Sparkles, Component } from "lucide-svelte";
    import { SpotlightCard } from "$lib/components/ui/spotlight-card";
</script>

<DocPage.Root>
    <DocPage.Header>
        <DocPage.Title>Introduction</DocPage.Title>
        <DocPage.Description>
            A collection of high-quality, copy-paste components for Svelte 5, built on top of shadcn-svelte.
        </DocPage.Description>
    </DocPage.Header>

    <DocPage.Content>

        <!-- HERO SECTION -->
        <div class="flex flex-col gap-4 py-4">
            <p class="leading-7 text-muted-foreground">
                This library extends the philosophy of shadcn/ui by providing more complex, interactive, and visual components that aren't included in the base registry. These components are designed to be copy-pasted into your project and customized to your needs.
            </p>
            <div class="flex items-center gap-4 pt-2">
                <Button href="/components/stepper">
                    Browse Components
                    <ArrowRight class="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" href="https://github.com/huntabyte/shadcn-svelte" target="_blank">
                    Visit shadcn-svelte
                </Button>
            </div>
        </div>

        <!-- FEATURES GRID -->
        <DocPage.Heading>Why use this?</DocPage.Heading>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <SpotlightCard class="p-6 flex flex-col gap-2" size={300}>
                <div class="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <Component class="h-5 w-5" />
                </div>
                <h3 class="text-lg font-semibold">Svelte 5 Native</h3>
                <p class="text-sm text-muted-foreground">
                    Built from the ground up using Runes (`$state`, `$props`, `$derived`) for maximum performance and developer experience.
                </p>
            </SpotlightCard>

            <SpotlightCard class="p-6 flex flex-col gap-2" size={300}>
                <div class="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <Copy class="h-5 w-5" />
                </div>
                <h3 class="text-lg font-semibold">Copy & Paste</h3>
                <p class="text-sm text-muted-foreground">
                    No npm packages to install. Just copy the code into your `src/lib/components` folder and you own it.
                </p>
            </SpotlightCard>

            <SpotlightCard class="p-6 flex flex-col gap-2" size={300}>
                <div class="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <Sparkles class="h-5 w-5" />
                </div>
                <h3 class="text-lg font-semibold">Visual Polish</h3>
                <p class="text-sm text-muted-foreground">
                    Components designed with micro-interactions and animations that give your app a premium feel immediately.
                </p>
            </SpotlightCard>

            <SpotlightCard class="p-6 flex flex-col gap-2" size={300}>
                <div class="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <Box class="h-5 w-5" />
                </div>
                <h3 class="text-lg font-semibold">Fully Type-Safe</h3>
                <p class="text-sm text-muted-foreground">
                    Written in TypeScript with strict typing for props and events, ensuring excellent IDE support and autocomplete.
                </p>
            </SpotlightCard>
        </div>

        <!-- FAQ / INFO -->
        <DocPage.Heading>FAQ</DocPage.Heading>
        <div class="space-y-4">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 class="font-semibold mb-2">Do I need shadcn-svelte installed?</h3>
                <p class="text-sm text-muted-foreground">
                    Yes. These components rely on the `cn` utility and base components (like `Button` or `Badge`) provided by standard shadcn-svelte installation.
                </p>
            </div>

            <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 class="font-semibold mb-2">Is this an official library?</h3>
                <p class="text-sm text-muted-foreground">
                    No. This is a community collection of patterns and components commonly requested but out of scope for the core library.
                </p>
            </div>
        </div>

    </DocPage.Content>
</DocPage.Root>