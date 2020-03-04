<template>
  <div>
    <h1>Devis (création)</h1>
  </div>
</template>

<script>
import { jsPDF as JSPDF } from 'jspdf'
export default {
  mounted: () => {
    const doc = new JSPDF()
    doc.text('Hello world!', 10, 10)
    doc.save('a4.pdf')
  }
}
</script>

<style lang="stylus">
</style>
