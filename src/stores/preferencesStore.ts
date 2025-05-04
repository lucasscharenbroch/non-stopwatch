import { ref } from 'vue';

// by default, only show seconds in dev
export const prefShowSeconds = ref<boolean>(import.meta.env.NODE_ENV === 'development');
