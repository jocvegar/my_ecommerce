<template>
  <v-footer :padless="true">
    <v-card flat tile width="100%" class="primary text-center">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="text-center text-md-left">
              <h3 class="py-3 accent--text">Party JoC</h3>
              <p class="grey--text text--darken-2">
                <v-icon size="24px" class="white--text mr-2">
                  mdi-recycle
                </v-icon>
                moda sostenible
              </p>
              <h3 class="py-3 accent--text">MÁS INFORMACIÓN</h3>
              <p class="grey--text text--darken-2">No aceptamos devoluciones</p>
              <p class="grey--text text--darken-2">
                Para pre-ordenar contactarnos:
              </p>
              <p class="grey--text text--darken-2">
                <v-icon size="24px" class="white--text mr-2">mdi-email</v-icon>
                <a
                  href="mailto:otravez.hn@gmail.com?&subject=Hola%20Otra%20Vez"
                  class="white--text text-decoration-none"
                >
                  otravez.hn@gmail.com
                </a>
              </p>
              <p class="grey--text text--darken-2">
                <v-icon size="24px" class="white--text mr-2">
                  mdi-whatsapp
                </v-icon>
                <a
                  href="https:wa.me/98722191"
                  class="white--text text-decoration-none"
                >
                  9872-2191
                </a>
              </p>
            </v-col>
            <v-col cols="12" md="6" class="text-center text-md-left">
              <h3 class="py-3 accent--text">REDES SOCIALES</h3>
              <div class="d-flex justify-space-around justify-md-start">
                <a
                  class="grey--text text--darken-2 text-decoration-none"
                  href="https:www.instagram.com/o.t.r.a.v.e.z/"
                  target="_blank"
                >
                  <v-icon size="24px" class="white--text mx-2">
                    mdi-instagram
                  </v-icon>
                </a>
                <a
                  class="grey--text text--darken-2 text-decoration-none"
                  href="mailto:otravez.hn@gmail.com"
                >
                  <v-icon size="24px" class="white--text mx-2">
                    mdi-email
                  </v-icon>
                </a>
              </div>
              <h3 class="py-4 accent--text">MÉTODOS DE PAGO</h3>
              <div
                class="d-flex justify-space-around justify-md-start grey--text text--darken-2"
              >
                <v-icon size="24px" class="white--text mx-2">mdi-cash</v-icon>
                <v-icon size="24px" class="white--text mx-2">
                  mdi-cellphone-wireless
                </v-icon>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-text class="accent--text">
        {{ new Date().getFullYear() }} — <strong>ShipIT</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {};
</script>

<style></style>
