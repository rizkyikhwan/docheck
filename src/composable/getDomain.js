import { ref } from "vue"

export default function getDomain() {

  const domain = ref({})
  const enterDomain = ref("")
  const loading = ref(null)

  const render = async() => {
    loading.value = true
    try {
      const res = await fetch(`https://domain-availability.whoisxmlapi.com/api/v1?apiKey=${import.meta.env.VITE_API_KEY}&domainName=${enterDomain.value}`)
      const response = await res.json()
      domain.value = response.DomainInfo
      loading.value = false
    } catch (err) {
      console.log(err)
    }
  }

  const searchDomain = () => {
    domain.value = ""
    render()
  }

  const clearDomain = () => {
    domain.value = ""
    enterDomain.value = ""
  }

  return { domain, enterDomain, loading, searchDomain, clearDomain }
}