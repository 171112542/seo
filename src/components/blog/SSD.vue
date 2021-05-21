<template>
  <v-container
    class="blog mt-16"
  >
    <div class="blog__social-media-container d-flex">
      <p class="text-subtitle-1 font-weight-bold">Share</p>
      <v-btn
        icon
        width="25"
        height="25"
        class="mb-2"
      >
        <v-img
          src="../../assets/img/facebook_icon.png"
          alt="Share on Facebook"
          width="25"
          height="25">
        </v-img>
      </v-btn>
      <v-btn
        icon
        width="25"
        height="25"
      >
        <v-img
          src="../../assets/img/twitter-icon.png"
          alt="Share on Twitter"
          width="25"
          height="25">
        </v-img>
      </v-btn>
    </div>
    <v-row
      class="px-lg-16 px-xs-2"
      justify="center"
      align="center"
    >
      <v-spacer></v-spacer>
      <v-col cols="8">
        <h1 class="text-h1 blog__title mb-4">4 SSD Murah dan Berkualitas 2021:
          Tingkatkan Kecepatan PC dan Laptop Lemot</h1>
        <p class="text-caption">21 Maret 2021</p>
        <figure class="mb-8">
          <v-img
            src="../../assets/img/ssd.jpg"
            alt="SSD Murah dan Berkualitas"
            height="400"
            class="mb-2"
          ></v-img>
          <figcaption
            class="text-caption text-center font-italic"
          >
            Contoh SSD 2TB. Sumber: basic-tutorials.com
          </figcaption>
        </figure>
        <p class="text-body-1 text-justify">
          SSD atau <i>solid-state drive</i>
          mengalami perkembangan drastis dan sekarang banyak digunakan orang-orang.
          Dulunya, PC dan laptop memiliki media penyimpanan yang dinamakan HDD atau <i>
          hard-disk drive</i>. Orang-orang mulai menggantikan dengan HDD dengan SSD karena
          perbedaan kecepatannya yang berkali lipat.
        </p>
        <p class="text-body-1 text-justify">
          SSD sekarang dianggap sebagai salah satu <i>upgrade</i> paling penting untuk PC dan
          laptop yang lemot (di samping RAM). Baik itu membuka <i>file</i> seperti Microsoft
          Word, membuka <i>browser</i> seperti Google Chrome, ataupun memainkan game populer
          seperti PUBG, pergantian dari HDD ke SSD pasti akan membuat PC dan laptopmu semakin
          cepat. Eh, tapi menggunakan SSD saja mungkin tidak cukup ya.
        </p>
        <h2 class="text-h2 mb-4">Apakah yang perlu diperhatikan saat membeli SSD?</h2>
        <p class="text-body-1">
          Beberapa hal yang harus diperhatikan saat membeli SSD ditulis sebagai berikut.
          <ul>
            <li>
              Kapasitas penyimpanan: sebagai sebuah media penyimpanan,
              kapasitas pastilah merupakan hal yang penting
            </li>
            <li>
              Kecepatan: SSD merupakan <i>upgrade</i> dari HDD karena kecepatannya;
              tiap SSD memiliki kecepatan masing-masing
            </li>
            <li>
              Keawetan: SSD memiliki umur yang terbatas; pastinya kita menginginkan
              SSD yang awet
            </li>
            <li>
              Harga: semua orang pasti mengincar SSD yang murah dan berkualitas
            </li>
          </ul>
        </p>
        <h2 class="text-h2 mb-4">4 Rekomendasi SSD Murah dan Berkualitas</h2>
        <ol>
          <li v-for="subheading in subheadings" :key="subheading.subheadingTitle" class="text-h3">
            <h3 class="text-h3 mb-4">{{ subheading.subheadingTitle }}</h3>
            <figure class="mb-8">
              <v-img
                :src="subheading.subheadingImage"
                :alt="subheading.subheadingTitle"
                class="mb-2"
              ></v-img>
              <figcaption
                class="text-caption text-center font-italic"
              >
                {{ subheading.subheadingImageCaption }}
              </figcaption>
            </figure>
            <div class="pa-2 blog__highlighted-section mb-4">
              <h4 class="text-h4 text-center font-weight-bold mb-2">KELEBIHAN</h4>
              <ul class="text-body-1 text-justify">
                <li v-for="pro in subheading.subheadingPros" :key="pro">
                  {{ pro }}
                </li>
              </ul>
            </div>
            <div class="pa-2 mb-4">
              <h4 class="text-h4 text-center mb-2 font-weight-bold">KEKURANGAN</h4>
              <ul class="text-body-1 text-justify">
                <li v-for="con in subheading.subheadingCons" :key="con">
                  {{ con }}
                </li>
              </ul>
            </div>
            <p v-for="paragraph in subheading.subheadingParagraphs" :key="paragraph"
              class="text-body-1 text-justify mb-4">
                {{ paragraph }}
            </p>
            <p class="mb-4 text-body-1 text-justify">
              <b>Kisaran Harga: <span class="blog__highlighted-text">
              {{ subheading.subheadingPrice }}</span></b> tergantung kapasitas
              penyimpanan yang dipilih
            </p>
            <v-btn
              block
              color="primary"
              class="mb-16"
            >
              {{ subheading.subheadingButtonText }}
            </v-btn>
          </li>
        </ol>
        <h2 class="text-h2 mb-4">Yang Mana yang Harus Kubeli?</h2>
        <p class="text-body-1 text-justify">
          Semua SSD yang direkomendasikan pada daftar di atas pasti akan cocok dengan
          laptop atau PC yang kamu gunakan. Kecepatan dan harganya semua berada hanya
          memiliki perbedaan yang tipis. SSD mana pun yang digunakan, laptop dan PC kamu
          yang lemot pasti dapat ditingkatkan kecepatannya.
        </p>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
const images = require.context('../../assets/img', false, /\.jpg$/);

export default {
  name: 'SSD',

  methods: {
    imgUrl(path) {
      return images(`./${path}`);
    },
  },

  data: () => ({
    subheadings: [
      {
        subheadingTitle: 'SSD Samsung 970 EVO',
        subheadingImage: 'https://www.custompcreview.com/wp-content/uploads/2018/04/samsung-970-evo-500gb-ssd-custom-pc-review-02732.jpg',
        subheadingImageCaption: 'SSD Samsung 970 EVO. Sumber: conrad.com',
        subheadingPros: [
          'Lumayan murah untuk SSD tipe NVMe (generasi lebih baru)',
          'Kecepatan yang Baik',
          'Memiliki garansi 5 tahun',
        ],
        subheadingCons: [
          'Kadang bisa mencapai kecepatan lebih rendah sebanding dengan '
          + 'pendahulunya, Samsung 960 Pro',
        ],
        subheadingParagraphs: [
          'Untuk kebanyakan antusias maupun pengguna PC dan laptop biasa, Samsung 970 EVO'
          + 'sudah dapat memenuhi kebutuhan pengguna. Samsung 970 EVO ini memiliki pilihan '
          + 'kapasitas penyimpanan 250GB, 500GB, 1TB, dan 2TB. Kecepatan read/write '
          + 'adalah sebesar 3500/2500 MB/detik. Dengan garansi 5 tahun, produk merk terkenal '
          + 'Samsung ini pasti cocok digunakan.',
        ],
        subheadingPrice: 'Rp900.000 hingga Rp4.000.000',
        subheadingButtonText: 'Beli Samsung 970 EVO',
      },
      {
        subheadingTitle: 'Crucial P5',
        subheadingImage: 'https://cdn.mos.cms.futurecdn.net/xMAaqhfBUsouYxNEz7wVMX.jpg',
        subheadingImageCaption: 'SSD Crucial P5. Sumber: sea.pcmag.com',
        subheadingPros: [
          'Salah satu SSD dengan performa di atas rata-rata',
          'Tahan lama',
          'Memiliki garansi 5 tahun',
        ],
        subheadingCons: [
          'Versi 250GB memiliki kecepatan yang lebih rendah',
        ],
        subheadingParagraphs: [
          'SSD dari Crucial diproduksi oleh perusahaan bernama Micron. Micron sendiri '
          + 'adalah salah satu perusahaan manufaktur terbesar untuk media penyimpanan. '
          + 'Kecepatan read/write dari SSD ini adalah 3400/3000 MB/detik untuk versi '
          + 'kapasitas penyimpanan yang bukan 250GB. Untuk kapasitas penyimpanan yang '
          + '250GB, kecepatannya turun drastis menjadi 3400/1400 MB/detik. Pilihan '
          + 'kapasitas penyimpanan yang tersedia adalah 250GB, 500GB, 1TB, dan 2TB.',
        ],
        subheadingPrice: 'Rp750.000 hingga Rp4.300.000',
        subheadingButtonText: 'Beli ADATA XPG SX8200 Pro',
      },
      {
        subheadingTitle: 'ADATA XPG SX8200 Pro',
        subheadingImage: 'https://cdn.mos.cms.futurecdn.net/3ZcYyaLf9H7ac4CeT5C8DK-1200-80.jpg',
        subheadingImageCaption: 'SSD ADATA XPG SX8200 Pro. Sumber: conrad.com',
        subheadingPros: [
          'Performa yang konsisten selama penggunaan',
          'Harga yang lebih kompetitif per GB',
          'Memiliki garansi 5 tahun',
          'Mendapatkan beberapa penghargaan',
        ],
        subheadingCons: [
          'Performa konsisten, tapi bukan yang tercepat',
        ],
        subheadingParagraphs: [
          'SSD ini memiliki harga yang lebih kompetitif dan bahkan dapat merintangi SSD '
          + 'terkenal lainnya yang lebih baru. Kecepatan read/write dari SSD ini adalah '
          + '3500/3000 MB/detik. Kapasitas penyimpanan yang tersedia adalah 256GB, 512GB, '
          + '1TB, dan 2TB.',
        ],
        subheadingPrice: 'Rp800.000 hingga Rp5.000.000',
        subheadingButtonText: 'Beli ADATA XPG SX8200 Pro',
      },
      {
        subheadingTitle: 'Addlink S70',
        subheadingImage: 'https://cdn.idntimes.com/content-images/post/20201111/s70-678533bd35e7334d19d700c9729242b0.jpg',
        subheadingImageCaption: 'SSD Addlink S70. Sumber: sea.pcmag.com',
        subheadingPros: [
          'Harga kompetitif',
          'Kecepatan yang tinggi',
          'Memiliki garansi 5 tahun',
          'Awet',
        ],
        subheadingCons: [
          'Kurang cocok untuk menjalankan file yang 4K',
        ],
        subheadingParagraphs: [
          'Addlink S70 memiliki harga yang sangat kompetitif dengan kecepatan yang tinggi. '
          + 'Kecepatan read/write dari SSD ini bergantung pada kapsitas penyimpanan yang dipilih. '
          + 'Kapasitas penyimpanan 256GB memiliki kecepatan 3000/1000 MB/detik. Kapasitas '
          + 'penyimpanan 512GB memiliki kecepatan 3400/2000 MB/detik. Kapasitas '
          + 'penyimpanan 1TB dan 2TB memiliki kecepatan 3400/3000 MB/detik. '
          + 'Keunggulan SSD ini adalah harganya yang sangat rendah. ',
        ],
        subheadingPrice: 'Rp650.000 hingga Rp3.800.000',
        subheadingButtonText: 'Beli Addlink S70',
      },
    ],
  }),
};
</script>
