<template>
  <div class="column items-center">
    <div>
      <h5 style="color: white">สแกนคิวอาร์โค้ดร้านค้า</h5>
    </div>
    <q-card class="bg-#0D47A1 items-center" style="width: 350px">
      <div class="column items-center">
        <h6 class="text-grey-6 q-ma-sm">สแกนบาร์โค้ด</h6>
        <q-btn
          class="bg-blue-10 text-white"
          @click="this.$router.push('/scan_bar')"
          >เปลี่ยนโหมด</q-btn
        >
        <div class="q-pt-md">
          <q-card
            style="width: 300px; height: 50px"
            class="bg-grey"
            @click="confirm = true"
          ></q-card>
        </div>
        <q-dialog v-model="confirm" persistent>
          <div class="row items-end">
            <q-card style="width: 350px; max-width: 80vw">
              <q-card-section class="row items-center">
                <div class="col-12 row justify-center">
                  <span class="q-ml-sm text-blue-10"
                    >เยาวราชกรุงเทพ <br />
                    ออเดอร์: DO000006 <br />
                    กล่อง: BO00000
                  </span>
                </div>
              </q-card-section>

              <div class="col-12 row justify-center">
                <q-img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEW+Hi3///+6Hi29Hi27Hi28Hi37+/v6+vr+/v78/Py7ABy3ABy7ABm9EyW+Gyu7ABrJWGHLYmq9Fie5AAC5AAq6ABD68fLDOUTJWWLy1tjNX2fuys3rwsXPZm7KYmr59fbIS1Xls7b35ebBKTfGPUnemZ7RbnXXf4bTdXzai5HeoqXHUFjWgojckpe8JzbpvsHw0tTjqq/jq6/y3uCrrdnIAAAV00lEQVR4nNVd6WKjug62m42dhAIJSTpZmyaZmXZO+/7vdm1jCIsNMjhtbn5MaUcBfUiyZEm2kYnZxxwb6cWYXxjjMeYXVRIVWjzZxMnH5/VyXm6P88NhNHg6HObH7fJ8uX5+JPEmo2u8Xf2+cDZR6zcnDQCxlJb+G399/D1tvTByfMsNAs/zEBo8DREiV0Hg2r4TPXvb02X3tS/eVwSw/d3mj55USJD4z/0kSIiS3fn3IXJsNyCwCK6nAUKIA6SfEb8gWG0nQtvzLqm9r/qjO7BpICDTEAlmtMl1ObAcgm2Y45IBRMOnEcUZuL49mF4T+oCqZkIkKNViPEbN35TKXqai8cc5iCyXCg49QQEyWgLTCoPzLq48WklF6wApQk2DDCHdf86I7IajjHsVgCmJ5zru8j9qlr1ssKhoCKTc+TeltER6uwVhz8uZVgFYpKUgp5kkCfcKNiikRd2Uu6qieHVyHKqbnQAW1DmVJBl9TqvSo7uziXTYYHw9Rq5cKqoAGYkbzl9jbPSzQfov6m+DyR/P9hrUrhNAKkkfvSXqEqzSor4Ak6VlD5vsSsUGyySjoWtN/3UHmP5Ekm+2yZ6TrLahO2hnuoME6QUhccPtyjAk1gFiEwEBCl4jwTcNA4hUugMknyD8vZJJEBJRIuE36+NvDaBJ9NNxQWrXTUVvJIGzTLqyOTZRNzdBvPuZDZ/3lmBK60ZvMTa7eTPUyU3gzatltzKtDSD52PZ1rMwmo0VdRlG8OjoeUO30AERPI+e4UmTTKHl8lVBt82YFEqa122DhZQTOeYMV2DRKHl9Fude2C2ZajwSz29n+BwazmUFCFYCt4298ikY/BBANhtEpLrPZPqtDLRKsvqPVuw1XOxhAkIpmL8M6rIFuoujxFQBenMGPAiTRanQxDJXEA1KJgfZHfwhnWreKZiT+8auZTYrkBgkphGrrIFAYGe8FcPQUBB8yFa1KkEBC8NTWq+PpAajqJmovw3NeQYkHBglB3cRm6aCHkCC7cBYbo3UUTSEhYAy0n9sqA8edARLXON+3AkwhIamKlkSZHFwVtdMVqklpyYTj8E+ocbVhBVUAipV77Qb6AXazwZwksNegDBwqq6jYBv979r5fgu2J8udPLHcTucyQ0AbL4+9rqDQyfhNA8gmvuNkGKRLUHgP9de4AsKeKphdD6jUaVZRAQq3pqkv0AwAHEICEJLoIJViEhNpssBng97uJyrsNL7xYKY0+UYub+HsPCbYBBKkoJ4lesRQgszrU7CZetdlg71BNcruhc5XbIP0hq3JzN/Goo2jh0Sj8T2qDN4SSUG39/PgAycXzummCVK5yV0I19w6OXquKprSem2B5eI2w1A/uD7pCtXvZYEYbvO8lKiqpcvPp0rwp2P5xN1GiDeYTsYoSSEiazVk2TZcexgY5rb0Uq+i4WOWuAHx1/k9UNH00id/q0ec49fjiqfL6kWb0kEc7aywOzqpV7iyrFjTkZB7LBjmJF0gycBKPf/z+rFoPFWW0wVGgoljm8S/O/4MfrDzauYgAlqvc2TxkHckTv49og5w2WonSNpW+NvYjfteeuv8OgMh7j8162kbk8U8/W3zp/mj7hGsAaV9bFeBHpArQc91goBkguad6F1n0UXcMqKqieGOPZADFbiKw5qe3l7kTAKUCUVHPn7+8neZWoKY8nhNXJCjy+GfFCq+1XZGbYWN9tLUBdI/rtFq5tVUAIuSeZVXuQhOCrwbQeTHIEJ1WNixNoZq92KROzJi8OCoACTurag4VlX4jbB7VmhD8F8wBks/C1iJBe8qZopE0hagwvgXH9OVUqty3fBxNzIgBim3QPxUAmpOZpQPg0rgBJCO7rzSA8xRqucpdaOXa+0p9MiWA4wk2GcR+oZo9GxcBUuelNJGx4hLASl8bH2bANjgrASQcGVOrrw1OzTJA00htERoU2OeiUvK+Nv7bBCdRDwma3Bb7qeiifDs8IYHmyVeJMaKk1FeESr8tVZrxhADx5JfVB+DMrAOktqgQ1rlLXIBU7mtbOQoAHRFAY2KOlxbqrKLLig2O+VTh5MPjVuSvCgDLfW1ThX5Rv2aDDCDliNhit+KLPTXKACfZXAj/8qEAB0/B9Aap3Ne2Cju6iTJAjJdWRzchsMH0vmNmi9A4P1zhepWb8rqFtzRLbJBzNP5lKwCUuolxDpBenOAllGBbq3IzgP9ChVCtQYLErU6YLaqGamYTQGaL0ElPWBhOC31tCxccbDcDnEyYLfYI1coqmhnjS1UzpGy6L1nirdjXlljQZQXB1mgGSC6MmaXoJiSDzO2+48k2EAOsDxX2VwbQuPW1vdnQCa+1agVIZDyzVVS02Qa5ZqwskATJhf2HAyz0tcUedOWLN28YZG46NZlacIBVNyEEiPHcAw4Vnhfjal/b1W6XfXpz94RbJcjG6qUlAggN1QQA8UkwVIjZpJXh1F/kfW1z8OIs981olSDr3KEzDRDAX8JQrQ4Qv7ng1NEx8xd8BoxXERQgCl5wuwTZOzCJ6+8RqtUA4pcAnIELV0bJ4xP5QwGOBvOy0UgBkouFJZXgzQaBKkr+B65oLGNzQ2iYsQMG+DR01kCA5thMXX+jmwADxGtfrhA1Nh2e60n72vDOgQNMcyEtNshuTkjYrL+3m0gvYp5DAsphl75k3tdGZxXw7CsZ+0wYQPLvwmoC2BaqFQCaC1sBIHIXuNDXtldML1vT7LFtAMlnavcI1W4AM/8KYnNEE/H7Ql/bp6OYP+fjHwRgloGDz+iFADezCsDWOq2Ttp+mfW0zV7FAMLKWJgxgQwZOxQYnVYDtbLoz1uzO+tpiW32jAGvaboM500TBFGb0AoCZ21Fhc+SyNVLMW+ycDjV6a7oxgQBp60r3UI2qaBUgiE3nI0d4drvUB+3ZBgoQb/IMnNQGG1S0ZoMwNlOnzxAGXTbrGD5ZSyDAYgYul+BdbZDReh7mfW1J1AEgJaG2CAKYZ+C6uImxipsoscmSGRTh1boxrQKQ2OJyYgIBsgycpPjSbIPLLjbIaP0rZn1teJFF3aoACcRZVsxqBUhsMcuzqLgJJRusTGSCJWZ9bSbyVAHeaPmICABomJN0RKwXX5pCtaoEVdgcPTGPjxOrqwTpwGFRr1YHKFY7CvGuoVqZzaGVsJw3m1d075OxSAAHkCBj2nix+oVqimzS+QVKWxP6tFPS4QYGkCY2nuEz+s5uIpcD9YgE4e+gqwTTi1zt2gESgf2BS9Do7CYyNoPfFGE8gu+rhkQBNFF3NnQAABZI7hWqlWi9Q0zm+F9R/141aosggNUknf5Qrcym80X84c7vYYMZCZlMmXoBjnUAHPg7oqUXhVYHsQTpJ/NxDWoHSJR3DNXkGUv7L0HI84j9AI6e+KxfRYJaZ/RiWjKYIl7Q6QtwhNis/5FskLIZbA208Zq332y3wUxPyEzD1AOwy4xeLG3PG6M41CJBxCDmYXgvFa2Fak0q2lI1CGNEm4T0ABRm4HTYYB9vFiXow9Gioohn4IzeKto7VCvJwflAn6B2I4gEBRm4DhI0e4dqJTbtHbpaGgESiItCBq6Linaf0QvZtK/o4uoEWMrAdVBRrTZISdwLOgeabDB7irXoDrDXjL4+6SEk7hktgy6vRgJwkGbgDF1uoluoVmQzWKKtpxkgDcM35k+GakUSb4uOHvibABWtZOB+0E1wEu+I5p5GG8xD+qk6QH2hWpHEm6ODZhVNb8dm/Wo2qDKjh9kgu3hHw3sALGfgfsRNZBcHNNBsg9lT6HADBmjqssE6m8Pibz0AChgJ/4BV1DQuz3CACipKSAYNK7a7qyhixRdw2tCcmAZz9TrdRMbmkI40vQH2q9GzAcl8se4hQUTwHSQANa98aU1vGAtbuw0ihpC1imlXUXjxJXcp+NYDp0+C1B/SmEY7QHjx5eYzx+OXXkUwMZskptmC2m7vaoMZLZtZaJUgQfibzC10uYkOfTLVqGdq6V4N7y3J/FC7m1C3wZx2qSUBX9yx/kzm+HoA9lXR9C8baQ9cRzmQOf7Vrnyz7yJlVTdRknZqi1rcREprXdGnr0OCfdxEhXZqaRpkGK3/SfOlGgG2r3xpT2/M6j1w3YcKZ81y3j8VqgkBCnrgeoyFUYLi5x8M1YTSNtP6vZ5ZXRjT2pMuFYW3U7bN/heWDhskH2+0QcbW+8FQTUJrvFg6VBQNvK2B8CnQo6LwPhlA/mYyk641VJJDcGZ1/No3O4Vq2lSUXpjmorwKtaMlsTp+upjkJ0M1cbv40uoPkLZ90X6a7gC1uokyQDrr7z+ri75oT9TB+85QzTDbAaa0xrJ9SWQLQO8Q8762bwvVDEhfW7bwrdbXpsxm8Jut5T673xaqGRvemwhbF2bM/F4AaW8i7fMutn21fVPDyhfadwMCyFeh9okoyUBDESbcXXQN1QwwwLT4Yk3zQ0ZbR1xjanewwVsRLDHYfm0jT032HUO1vPhiZyvfWiTIPsv6QgIwm+jJTNdys159TaEaqPhipfEPAOB4PEkzcJ2GioB6abp7y9XvrKIdW5pZ3w0wKGCz/m41IptuZk53b0lCxVCti5so98ko9cBNrW6D/VNIj01M1z159w7Van0y1qLeA1dT0ey+M7uTN2PrnvK1a23f7Okm6gVQXptqBJiF4bcMnIoE0wXrBl9/eN9QTdgnw/puAHEr/R/mZpQnPXT9Ybp7ixm7HvibnUI1YZ8M7bsBSLCQgVOQ4JAudY7T/droWu6Zq/DNFKCGlS+0EN5mg9ntjJmtOlS4M3w7lYyu5b5rqCYCiAZZnbgdIMbZa4LP6uhabjPbvWXvev1CtQYJNq18saYl2qZ9fXgGDg7QC/ZsgQTfvWUaqKioq+ImGvtkaN8NQII8A2erWJK7SPeK4ru37HwFgB7fI1RHn4w125hSP1h5cZujpyAHf5fehCPke5vAkpN81z6QDba2U/IYtV2CmJ7xCs+sDPjeJtl+bXxdCUSCT166P42ulS+yHrg6QCPbnwZkSWf+4rJTyf6FUIBD9wUKENbSzKQIAohf4HKI/qUAb6eSsW20ACo6RO4bUEWhvWrWzDQgAMf4zRUBFLHp8XMExrdTya4OtEDgnoChGrid0lrcFr41pjdOLhAgPwWKzl/yU8liNISoKOL7teld+XLzr/XbFaMekaIJ2Uz3ayufSob/2IBvpq8820ZL38oXq5SBkwFcwXZHIxdsz710u/n8VDIjAScng+2kVUVV2ynprL8NoLENIAl4druv/KiL/BxSI91EuOWb6c3tlzYJqq98ITMNsxkgpml+GEAadJVPJTMmaTIDoKKMhO5fqnvlS7bVvBxgfSyU3S5MKqeSGelv2wAkQUrinxryLB1bmlNblAI8wQEG28qpZBwgXoXtNpjd3D8Z8kim48oXOuuXA/Th5e7wdnwA9/j8N2MaQBhJL/heeeAZveS+JaapLfZXUTqrKJ1KZmTyNI2VyvbudD9vkIoCbDDPwC0lGTgFFaX7eRdPtEbGTZ58OG1X0VQqdD9oXTaYvQxJBo6ejwBVUZa9uEG6nVHCfqPtQ1CAzBbHVYB9V76wWT/ABhvGwijBHNKk5PFTXt9smIqmJP4MVwD2X6RMZ/01G6xJsMnr8FUQklPJYncEB/j0RBVVn4pKMnBKNogG6T50OcDqqWRkipHdAgBwwGyxe6gmAkgzcD1UNDtaNpeZUT6HdGyabI9QKEB2zsxY9yLlLAOXqmgjwNrtvKNZkiCunkpmsLOCVFbr+b+yzXXi/vvJ8HdLyzY82Fbxg5QkyyE1nUP6JsifN+ZZtuymE3bekwYJ0h/2cc3e22rbGGzXb2e/lVQUp6eSTUoA8cYeqgAcZmd2+Spb4MoBpheezc/sUulMJE90N6VhpXwOaS7Yj0gJIErPXYPv0gxjOj13TU2Co3BdUVEsOJWMZhYlTXN9NgRTUFHFGlHhdtapDrB2Khkt1MTvwpVCugDC1U5NRUe0x6s2rNxOJbsBZBu0P7oERUNFtKoMMviGsHLcXOEcUj0Dx3eoaHoOafXA0eqpZPkBc3xv8EeVoOh27lEkweqpZHlX4D7wvhvgAA5QpKJesK/bYH4qWRXg2KRnOj/WINP2aLrZf11FmcevA2Rpy1fn/8kG6bncYlGVTyW7/RmzDaofR4Jt83JrKVTRosevAcSbeT7a/LgNtgF055tiqIaLkJAMoGnsD0Fvpr/HBoPDXmCDvGCHKgBvm60aOHFFPe4P5yZIWJyIBhmOBJUBjgsAMV4/PxhA8aTneS2zQYxLp5IVAXK6z3D4+ADDT5GjL3p8gYpmXyikbR7VTdCTneoAJzdIqAmgOcavEZDpH7JBFL02SXBSOJWsrqKpMV7CewLsGaoRFb3UkhR1jy8DyL9wKewz/GihGooujTZY6Gsru4nSG8mOeX5IGxSqqFmChCp/LthgdoGvYQ8J9gDYWkIJr01ugssMVQBOjMoFaz999h4wVPOeP6WhWs3j10bRSoiwdoNuKnrPUM1dN7sJDglhkQ3Wvpm8B5ol2Bege0ha3ARHghptMFduvJ9rSDFqjGSs+b7JBgtWh+RuovxqJi/OAwF0lhsxmxWA40JfWwtATL2Gp2SD91NRrzijl7qJal9bg4pmt1h7fTJwGrNqwVqYVRO7diQM1cTKjfdHlWMSW6Td2U04x30jmxXPV6lytyn3JQp+OFTzInHiVxp9VqrcDd9MZb96ly9b/Zbiy2ElZlNogzlCgA3m34xPkdcqwXuFaoPwJCq+SG0QV6vcbWE6JTHxh2V3B9hrumRbH1A2m6rcuDEGoiSbsxP8gIp6zttGwqZURVlfmzxUk8t+dcxnVN8FcOAcV6ps8iq3AGDL+Es+kytT1e+LZGz3aiqzOS71tSmMv4wkfotc9F0SdKO3uAubzOND3UT97SUzq33Heh0AXWeWNePJBSdlU+bxW5Q7/ayWYXB3FQ3C6Yo/T9kGbwjhMVBF2v+2z+5dQzU33K5w1hDbhc1ylVvgJqRTq+zmyYttS1aU9VZRz7am/zCWDxUQNpHwm+2yv5X88dfFc4I72KDno7ekOWRus0HKpsjjQ2RfIomvx9DVa4ODIJq/xsVHdxkq0iq3Wgwko12dHYet6tcB0HN95/yv/OjObCLI8NT+9shYsNktXccd9VZRz3WC6W4jeXRbRFlnE/WxwZshpBf7z19ulO7P0FGCBJ47+9xjXHl0FzdRrnIruwnxU7ARf5y90HdH1bojACAK7NA772I2gakA7OrNcKGvrcp0q5uoSTCnTf6bPVkObciEStALXMd6WlyT5kd3YhNJvqlig7WnkL8lu/Pvg+PYaeOpHKDnBbYToe15l0CG/uq7BdCK+9o62KCANv76+HvaemHk2DbtsfU8DpBcEalZvhOFo+3psvuihmfI3ldXN8EvEETtmgHKGMFs2YQxjpOP3fVyXm6P8/fDAI0Oh/lxuzxfrp/rJN5I7UrdOsS0/wPyBSJ8QC96XAAAAABJRU5ErkJggg=="
                  style="width: 100px; height: 100px"
                  v-close-popup
                />
              </div>
              <div class="q-ma-sm">
                <h6 class="q-ma-sm"></h6>
              </div>
            </q-card>
          </div>
        </q-dialog>
        <div class="q-ma-sm">
          <h6 class="q-ma-sm"></h6>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ScanBarView",
  components: {},
  setup() {
    return {
      confirm: ref(false),

      address: ref(""),
    };
  },
};
</script>

<style>
html,
body {
  background: #0d47a1;
  height: 100%;
}
</style>
