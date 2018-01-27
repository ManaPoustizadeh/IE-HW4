<template>
  <b-card class="m-5">
      <b-form>
            <b-form-input v-model="title" id="title" class="form-input p-2" placeholder="عنوان"></b-form-input>
            <b-form-input v-model="original_title" id="original_title" class="form-input p-2 mt-3" placeholder="عنوان اصلی"></b-form-input>
            <b-form-input v-model="rate" type="number" min="0" max="5" class="form-input p-2 mt-3" placeholder="امتیاز"></b-form-input>
            <b-form-input v-model="year" id="year" class="form-input p-2 mt-3" placeholder="سال تولید"></b-form-input>
            <b-form-input v-model="length" id="length" class="form-input p-2 mt-3" placeholder="طول فیلم"></b-form-input>
            <b-form-input v-model="language" id="language" class="form-input p-2 mt-3" placeholder="زبان"></b-form-input>
            <b-form-input v-model="thumbnail" id="thumbnail" class="form-input p-2 mt-3" placeholder="پوستر فیلم"></b-form-input>
            <b-form-input v-model="country" id="country" class="form-input p-2 mt-3" placeholder="کشور"></b-form-input>
            <b-form-input v-model="director" id="director" class="form-input p-2 mt-3" placeholder="کارگردان"></b-form-input>
            <b-form-input v-model="imdbId" id="imdbId" class="form-input p-2 mt-3" placeholder="ImdbId"></b-form-input>
            <b-form-input v-model="genres" id="genres" class="form-input p-2 mt-3" placeholder="ژانرها"></b-form-input>
            <b-form-input v-model="qualities" id="qualities" class="form-input p-2 mt-3" placeholder="کیفیت‌ها"></b-form-input>
            <b-form-input v-model="resName" id="resName" class="form-input p-2 mt-3" placeholder="نام کیفیت"></b-form-input>
            <b-form-input v-model="size" id="size" class="form-input p-2 mt-3" placeholder="سایز"></b-form-input>
            <b-form-input v-model="encoder" id="encoder" class="form-input p-2 mt-3" placeholder="encoder"></b-form-input>
            <b-form-input v-model="resLang" id="resLang" class="form-input p-2 mt-3" placeholder="زبان"></b-form-input>
            <b-form-input v-model="codec" id="codec" class="form-input p-2 mt-3" placeholder="codec"></b-form-input>
            <div class="text-center py-3">
            </div>
            <div class="text-center">
            <b-btn @click="submit" id="registerButton" variant="primary">ثبت</b-btn>
            </div>
        </b-form>
  </b-card>
</template>

<script>
export default {
    middleware: ['auth', 'admin'],

    data() {
        return {
            title: '',
            original_title: '',
            rate: '',
            year: '',
            length: '',
            language: '',
            country: '',
            director: '',
            imdbId: '',
            thumbnail: '',
            genres: '',
            qualities: '',
            resName: '',
            size: '',
            encoder: '',
            resLang: '',
            codec: '',
        }
    },
    methods: {
        async submit() {
            let genres = this.genres.split(',');
            let qualities = this.qualities.split(',');
            let resolution = {
                resName: this.resName,
                size: this.size,
                encoder: this.encoder,
                resLang: this.resLang,
                codec: this.codec,
            }
            let movie = {
                title: this.title,
                original_title: this.original_title,
                rate: this.rate,
                year: this.year,
                length: this.length,
                language: this.language,
                country: this.country,
                director: this.director,
                imdbId: this.imdbId,
                thumbnail: this.thumbnail,
                genres: genres,
                qualities: qualities,
                resolutions: [resolution],
            }
            try {
                let res = await this.$axios.post('/submit', {movie});
                console.log('happy');
                this.$router.go('/admin');
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style>

</style>
