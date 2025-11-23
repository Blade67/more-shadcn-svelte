<script lang="ts">
    import { cn } from "$lib/utils";
    import { buttonVariants } from "$lib/components/ui/button";
    import type { Snippet } from "svelte";
    import type { VariantProps } from "class-variance-authority";
    import type { HTMLButtonAttributes } from "svelte/elements";

    type Props = HTMLButtonAttributes &
        VariantProps<typeof buttonVariants> & {
        children: Snippet;
    };

    let {
        class: className,
        variant = "default",
        size = "default",
        children,
        ...rest
    }: Props = $props();
</script>

<button
        class={cn(
        // "relative overflow-hidden" is crucial for masking the shine
        "relative overflow-hidden group",
        buttonVariants({ variant, size }),
        className
    )}
        {...rest}
>
    <!-- Shine Layer -->
    <div
            class="shine-element absolute inset-0 -top-[20%] -bottom-[20%] z-0 hidden w-[50%] -translate-x-[200%] bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] group-hover:animate-none md:block"
            aria-hidden="true"
    ></div>

    <!--
         FIX: Added "flex items-center gap-2" here.
         This ensures the inner content (Icon + Text) aligns horizontally.
         "justify-center" keeps it centered if the button is wide.
    -->
    <span class="relative z-10 flex items-center justify-center">
        {@render children()}
    </span>
</button>

<style>
    .shine-element {
        animation: shine 4s ease-in-out infinite;
    }

    @keyframes shine {
        0% {
            left: -100%;
        }
        15% {
            left: 210%;
        }
        100% {
            left: 210%;
        }
    }
</style>