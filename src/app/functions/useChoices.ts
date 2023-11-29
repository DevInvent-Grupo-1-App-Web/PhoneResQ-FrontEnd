import { reactive, toRefs } from 'vue';

interface ChoicesState {
    choices: Record<string, unknown>;
}

export function useChoices() {
    const state: ChoicesState = reactive({
        choices: {}
    });

    function setChoice(key: string, value: unknown): void {
        state.choices[key] = value;
    }

    return {
        ...toRefs(state),
        setChoice
    };
}