<script lang="ts">
    import { cn } from "$lib/utils";
    import type { Snippet } from "svelte";
    import * as Code from '$lib/components/ui/code';

    let { class: className, code }: {
        class?: string,
        code: string
    } = $props();

</script>

<div class={cn("", className)}>
    <Code.Root lang="svelte" code={code} class="rounded-t-none border-t-0 bg-muted">
        <Code.CopyButton />
    </Code.Root>
</div>