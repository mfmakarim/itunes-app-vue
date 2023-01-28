export const useSearch = () => {
  const url = 'https://itunes.apple.com/search?term='
  const limit = 25
  const search = async (term:string) => {
    const { data: results } = await useFetch(`${url+term}&limit${limit}`)
    return results
  }

  return {
    search
  }
}