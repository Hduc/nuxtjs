export const state = () => ({
    counter: 0,
    locales: ['en', 'vn'],
    locale: 'vn'
})

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.includes(locale)) {
            state.locale = locale
        }
    },
    increment(state) {
        state.counter++
    }
}
