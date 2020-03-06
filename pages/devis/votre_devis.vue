<template>
  <div>
    <h1>Devis (création)</h1>
    <button @click="download()">
      Télécharger le devis
    </button>
    <!-- <iframe :src="dataPDF" /> -->
    {{ dataPDF }}
  </div>
</template>

<script>
import * as jsPDF from 'jspdf'
export default {
  data: () => {
    return {
      client: { firstname: '[[Prénom]]', lastname: '[[Nom]]', entreprise: '[[Entreprise client]]', tel: '[[Téléphone]]', mail: '[[Adresse mail]]', address: '[[Adresse postale]]', zipcity: '[[ZIP + Ville]]' },
      ref: { ref: '[[Référence devis]]', date: '[[Date]]', id: '[[Id client]]' },
      intitule: '[[Intitulé]]',
      services: [[2, 'Camion Benne', 100], [4, 'Base vie autonome', 200]],
      tva: 20 / 100,
      dataPDF: ''
    }
  },
  mounted: () => {
  },
  methods: {
    download () {
      const height = 297
      const width = 210
      const verticalMargin = 18
      const horizontalMargin = 15
      const lineHeight = 5
      const fontSizeDevis = 24
      const fontSizeTitle = 16
      const fontSizeText = 12
      const fontSizeMiddle = 11
      const fontSizeLittle = 10
      const tab = [134.6, 146.6, 158.6, 170.6]
      // eslint-disable-next-line
      const doc = new jsPDF()
      /**
       * HEADER
       */
      doc.setFontSize(fontSizeDevis)
      doc.setFontStyle('bold')
      doc.text('DEVIS', width - horizontalMargin, verticalMargin + 2, 'right')
      doc.setFontSize(fontSizeTitle)
      doc.text('Socobat Environnement', horizontalMargin, verticalMargin)
      doc.setFontSize(fontSizeText)
      doc.setFontStyle('normal')
      doc.text('47 Rue de la Ferme', horizontalMargin, 28)
      doc.text('93100 Montreuil', horizontalMargin, 28 + lineHeight)
      doc.text('0102030405', horizontalMargin, 28 + lineHeight * 2)
      doc.text('socobat-environnement.fr', horizontalMargin, 28 + lineHeight * 3)
      /**
       * CLIENT
       */
      doc.setFontSize(fontSizeTitle)
      doc.setFontStyle('bold')
      doc.text(`${this.client.entreprise}`, horizontalMargin, 60)
      doc.setFontSize(fontSizeText)
      doc.setFontStyle('normal')
      doc.text(`${this.client.firstname} ${this.client.lastname}`, horizontalMargin, 70)
      doc.text(`${this.client.address}`, horizontalMargin, 70 + lineHeight)
      doc.text(`${this.client.zipcity}`, horizontalMargin, 70 + lineHeight * 2)
      doc.text(`${this.client.mail}`, horizontalMargin, 70 + lineHeight * 3)
      doc.text(`${this.client.tel}`, horizontalMargin, 70 + lineHeight * 4)
      /**
       * RÉFÉRENCE CLIENT
       */
      doc.setFontSize(fontSizeText)
      doc.setFontStyle('normal')
      doc.setFillColor('#EAEAEA')
      doc.rect(width - horizontalMargin - 80, 66, 80, lineHeight * 4, 'F')
      doc.text('Référence', width - horizontalMargin - 75, 72.5)
      doc.text('Date', width - horizontalMargin - 75, 72.5 + lineHeight)
      doc.text('N°client', width - horizontalMargin - 75, 72.5 + lineHeight * 2)
      doc.text(':', width - horizontalMargin - 50, 72.5)
      doc.text(':', width - horizontalMargin - 50, 72.5 + lineHeight)
      doc.text(':', width - horizontalMargin - 50, 72.5 + lineHeight * 2)
      doc.text(`${this.ref.ref}`, width - horizontalMargin - 45, 72.5)
      doc.text(`${this.ref.date}`, width - horizontalMargin - 45, 72.5 + lineHeight)
      doc.text(`${this.ref.id}`, width - horizontalMargin - 45, 72.5 + lineHeight * 2)
      /**
       * TABLEAU HEAD
       */
      doc.text(`Intitulé: ${this.intitule}`, horizontalMargin, 110)
      doc.setFillColor('#EAEAEA')
      doc.rect(horizontalMargin, 115, 1 / 6 * (width - horizontalMargin * 2), 12, 'DF')
      doc.rect(horizontalMargin + 1 / 6 * (width - horizontalMargin * 2), 115, 1 / 2 * (width - horizontalMargin * 2), 12, 'DF')
      doc.rect(horizontalMargin + 4 / 6 * (width - horizontalMargin * 2), 115, 1 / 6 * (width - horizontalMargin * 2), 12, 'DF')
      doc.rect(horizontalMargin + 5 / 6 * (width - horizontalMargin * 2), 115, 1 / 6 * (width - horizontalMargin * 2), 12, 'DF')
      doc.setFontSize(fontSizeLittle)
      doc.setFontStyle('bold')
      doc.text('QUANTITÉ', horizontalMargin + 1 / 6 * (width - horizontalMargin * 2) / 2, 122.6, 'center', 'middle')
      doc.text('DÉSIGNATION', horizontalMargin + 1 / 6 * (width - horizontalMargin * 2) + 1 / 2 * (width - horizontalMargin * 2) / 2, 122.6, 'center', 'middle')
      doc.text('PRIX UNIT. HT', horizontalMargin + 4 / 6 * (width - horizontalMargin * 2) + 1 / 6 * (width - horizontalMargin * 2) / 2, 122.6, 'center', 'middle')
      doc.text('MONTANT HT', horizontalMargin + 5 / 6 * (width - horizontalMargin * 2) + 1 / 6 * (width - horizontalMargin * 2) / 2, 122.6, 'center', 'middle')
      /**
       * TABLEAU 1
       */
      doc.rect(horizontalMargin, 127, 1 / 6 * (width - horizontalMargin * 2), 12)
      doc.rect(horizontalMargin + 1 / 6 * (width - horizontalMargin * 2), 127, 1 / 2 * (width - horizontalMargin * 2), 12)
      doc.rect(horizontalMargin + 4 / 6 * (width - horizontalMargin * 2), 127, 1 / 6 * (width - horizontalMargin * 2), 12)
      doc.rect(horizontalMargin + 5 / 6 * (width - horizontalMargin * 2), 127, 1 / 6 * (width - horizontalMargin * 2), 12)
      /**
       * TABLEAU 2
       */
      doc.rect(horizontalMargin, 139, 1 / 6 * (width - horizontalMargin * 2), 12)
      doc.rect(horizontalMargin + 1 / 6 * (width - horizontalMargin * 2), 139, 1 / 2 * (width - horizontalMargin * 2), 12)
      doc.rect(horizontalMargin + 4 / 6 * (width - horizontalMargin * 2), 139, 1 / 6 * (width - horizontalMargin * 2), 12)
      doc.rect(horizontalMargin + 5 / 6 * (width - horizontalMargin * 2), 139, 1 / 6 * (width - horizontalMargin * 2), 12)
      /**
       * TABLEAU 3
       */
      doc.rect(horizontalMargin, 151, 1 / 6 * (width - horizontalMargin * 2), 12)
      doc.rect(horizontalMargin + 1 / 6 * (width - horizontalMargin * 2), 151, 1 / 2 * (width - horizontalMargin * 2), 12)
      doc.rect(horizontalMargin + 4 / 6 * (width - horizontalMargin * 2), 151, 1 / 6 * (width - horizontalMargin * 2), 12)
      doc.rect(horizontalMargin + 5 / 6 * (width - horizontalMargin * 2), 151, 1 / 6 * (width - horizontalMargin * 2), 12)
      /**
       * TABLEAU 4
       */
      doc.rect(horizontalMargin, 163, 1 / 6 * (width - horizontalMargin * 2), 12)
      doc.rect(horizontalMargin + 1 / 6 * (width - horizontalMargin * 2), 163, 1 / 2 * (width - horizontalMargin * 2), 12)
      doc.rect(horizontalMargin + 4 / 6 * (width - horizontalMargin * 2), 163, 1 / 6 * (width - horizontalMargin * 2), 12)
      doc.rect(horizontalMargin + 5 / 6 * (width - horizontalMargin * 2), 163, 1 / 6 * (width - horizontalMargin * 2), 12)
      /**
       * TABLEAU COMPLÉTION
       */
      doc.setFontStyle('italic')
      doc.setFontSize(fontSizeText)
      this.services.forEach((service, index) => {
        doc.text(`${service[0]}`, horizontalMargin + 1 / 6 * (width - horizontalMargin * 2) / 2, tab[index], 'center', 'middle')
        doc.text(`${service[1]}`, horizontalMargin + 1 / 6 * (width - horizontalMargin * 2) + 4, tab[index], 'left', 'middle')
        doc.text(`${service[2]}`, horizontalMargin + 4 / 6 * (width - horizontalMargin * 2) + 1 / 6 * (width - horizontalMargin * 2) - 4, tab[index], 'right', 'middle')
        doc.text(`${service[0] * service[2]}`, horizontalMargin + 5 / 6 * (width - horizontalMargin * 2) + 1 / 6 * (width - horizontalMargin * 2) - 4, tab[index], 'right', 'middle')
      })
      /**
       * RECAPITULATIF
       */
      doc.setFontSize(fontSizeMiddle)
      doc.rect(horizontalMargin + 3.5 / 6 * (width - horizontalMargin * 2), 183, 1.5 / 6 * (width - horizontalMargin * 2), 12)
      doc.rect(horizontalMargin + 5 / 6 * (width - horizontalMargin * 2), 183, 1 / 6 * (width - horizontalMargin * 2), 12)
      doc.rect(horizontalMargin + 3.5 / 6 * (width - horizontalMargin * 2), 195, 1.5 / 6 * (width - horizontalMargin * 2), 12)
      doc.rect(horizontalMargin + 5 / 6 * (width - horizontalMargin * 2), 195, 1 / 6 * (width - horizontalMargin * 2), 12)
      doc.rect(horizontalMargin + 3.5 / 6 * (width - horizontalMargin * 2), 207, 1.5 / 6 * (width - horizontalMargin * 2), 12)
      doc.rect(horizontalMargin + 5 / 6 * (width - horizontalMargin * 2), 207, 1 / 6 * (width - horizontalMargin * 2), 12)
      doc.text('Total Hors Taxe', horizontalMargin + 3.5 / 6 * (width - horizontalMargin * 2) + 2, 190.6, 'left', 'middle')
      doc.text(`TVA à ${this.tva * 100}%`, horizontalMargin + 3.5 / 6 * (width - horizontalMargin * 2) + 2, 202.6, 'left', 'middle')
      doc.setFontStyle('bold')
      doc.text('Total TTC en euros', horizontalMargin + 3.5 / 6 * (width - horizontalMargin * 2) + 2, 214.6, 'left', 'middle')
      /**
       * RECAPITULATIF COMPLÉTION
       */
      let totalHT = 0
      this.services.forEach((service) => {
        totalHT += service[0] * service[2]
      })
      doc.setFontStyle('normal')
      doc.text(`${totalHT} €`, horizontalMargin + (width - horizontalMargin * 2) - 2, 190.6, 'right', 'middle')
      doc.text(`${this.tva * totalHT} €`, horizontalMargin + (width - horizontalMargin * 2) - 2, 202.6, 'right', 'middle')
      doc.setFontStyle('bold')
      doc.text(`${totalHT + this.tva * totalHT} €`, horizontalMargin + (width - horizontalMargin * 2) - 2, 214.6, 'right', 'middle')
      /**
       * FOOTER
       */
      doc.setFontSize(fontSizeLittle)
      doc.setFontStyle('normal')
      doc.text('N° Siret 879 780 328 00016 RCS Bobigny', width / 2, height - verticalMargin - 4, 'center', 'bottom')
      doc.text('Code APE 3832Z - N° TVA intracom FR 77825898764000', width / 2, height - verticalMargin, 'center', 'bottom')
      /**
       * DOWNLOAD
       */
      // this.dataPDF = doc.output('dataurlstring')
      this.dataPDF = doc.save('devis')
    }
  }
}
</script>

<style lang="stylus">
</style>
