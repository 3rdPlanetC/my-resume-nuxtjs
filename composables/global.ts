export const useGlobalStore = defineStore('global', () => {
    // states
    const loading = ref<boolean>(false)

    // mutation
    function setLoading(payload: boolean) {
        loading.value = payload
        if (loading.value) {
            document?.body.classList.add('overflow-hidden')
        } else {
            document?.body.classList.remove('overflow-hidden')
        }
    }

    return {
        loading,
        setLoading
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}
