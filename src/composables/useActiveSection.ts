import { onMounted, onUnmounted, ref } from 'vue'

export function useActiveSection(sectionIds: string[]) {
  const activeSection = ref(sectionIds[0] ?? '')
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) activeSection.value = visible.target.id
    }, { threshold: [0.25, 0.5, 0.75] })
    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer?.observe(section)
    })
  })

  onUnmounted(() => observer?.disconnect())
  return { activeSection }
}
