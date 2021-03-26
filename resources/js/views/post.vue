<template>
    <div>
        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading" v-text="post.title"></h1>
            </div>
        </section>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 ">
                    <p v-text="post.excerpt"></p>
                    <div v-html="post.body"></div>
                    <hr>
                    <h1>Otros articulos</h1>
                    <posts-component></posts-component>
                </div>
            </div>
        </div>
    </div>
</template>

<script> 
    export default {
        props: ['slug'],
        data() {
            return {
                post: {}
            }
        },
        created() {
            let url = 'http://127.0.0.1:8000/api/post/' + this.slug;

            axios.get(url)
            .then(response => {
                this.post = response.data
            })

        }
    }
</script>
