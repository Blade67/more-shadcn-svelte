<script lang="ts">
    import { cn } from "$lib/utils";
    import { spring } from "svelte/motion";
    import { onMount } from "svelte";

    let {
        value = 0,
        initial = 0,
        duration = 1000, // Target duration in ms (approximate for spring)
        class: className
    }: {
        value: number;
        initial?: number;
        duration?: number;
        class?: string;
    } = $props();

    // Create a spring store
    // Stiffness and damping control the "bounciness" and speed
    const count = spring(initial, {
        stiffness: 0.1,
        damping: 0.4
    });

    let element: HTMLSpanElement;
    let isVisible = false;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isVisible) {
                    isVisible = true;
                    // Set the spring target to the final value
                    count.set(value);
                }
            },
            { threshold: 0.1 } // Trigger when 10% visible
        );

        if (element) observer.observe(element);

        return () => observer.disconnect();
    });

    // Format the number with commas (e.g., 1,234)
    // You can customize this locale if needed
    let displayValue = $derived(Math.round($count).toLocaleString("en-US"));
</script>

<span
        bind:this={element}
        class={cn("tabular-nums tracking-tight text-foreground", className)}
>
	{displayValue}
</span>