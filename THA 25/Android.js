import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Game = () => {
    return (
      <div className="App">
        <h1 className="text-center text-dark my-4">ANDROID</h1>
        <div id="cards_landscape_wrap-2">
          <div className="container">
            <div className="row">
              <div
                className="col-xs-12 col-sm-6 col-md-5 col-lg-3"
                id="cards_landscape_wrap-2"
              >
                <div class="card-flyer">
                  <div class="image-box">
                    <img
                      class="card-img-top"
                      src="https://courses.javacodegeeks.com/wp-content/uploads/2020/02/1625800_2ffc_5-300x300.jpg"
                      alt="Card image cap"
                      height="200px"
                    />
                  </div>
                  <div class="card-body text-container">
                    <h5 class="card-title text-start">Android Java Masterclass...</h5>
                    <p class="card-text text-start">
                    Improve your career options by learning Android app Development. Master Android Studio and build your first app.
                      <h3>★★★★☆</h3>
                    </p>

                    <a href="https://www.udemy.com/course/master-android-7-nougat-java-app-development-step-by-step/" target="_blank" class="btn btn-dark">
                      View Course
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-5 col-lg-3"
                id="cards_landscape_wrap-2"
              >
                <div class="card-flyer">
                  <div class="image-box">
                    <img
                      class="card-img-top"
                      src="https://www.slashgear.com/wp-content/uploads/2011/01/android_s2-hexcode_pre.jpg"
                      alt="Card image cap"
                      height="200px"
                    />
                  </div>
                  <div class="card-body text-container">
                    <h5 class="card-title text-start">The Complete Android 10...</h5>
                    <p class="card-text text-start">
                    Learn Android 10 App Development From Beginner to Advanced Developer. Build Apps like Trello, 7Min Workout, Weather App.
                      <h3>★★★★☆</h3>
                    </p>

                    <a href="https://www.udemy.com/course/android-kotlin-developer/" target="_blank" class="btn btn-dark">
                      View Course
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-5 col-lg-3"
                id="cards_landscape_wrap-2"
              >
                <div class="card-flyer">
                  <div class="image-box">
                    <img
                      class="card-img-top"
                      src="https://cdn.eduonix.com/assets/images/header_img/2020062508133511994.jpg"
                      alt="Card image cap"
                      height="200px"
                    />
                  </div>
                  <div class="card-body text-container">
                    <h5 class="card-title text-start">Android Multithreading Masterclass</h5>
                    <p class="card-text text-start">
                    Complete guide to multithreading in Android. From fundamentals to Thread Pools, RxJava and Kotlin.
                      <h3>★★★★☆</h3>
                    </p>

                    <a href="https://www.udemy.com/course/android-multithreading/" target="_blank" class="btn btn-dark">
                      View Course
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-5 col-lg-3"
                id="cards_landscape_wrap-2"
              >
                <div class="card-flyer">
                  <div class="image-box">
                    <img
                      class="card-img-top"
                      src="https://media.onlinefreecourse.net/udemy/2018/08/26061733/cPNPjQ.jpg"
                      alt="Card image cap"
                      height="200px"
                    />
                  </div>
                  <div class="card-body text-container">
                    <h5 class="card-title text-start">The Complete Android R...</h5>
                    <p class="card-text text-start">
                    In this course, you'll learn Android Development and get to build your own Android R apps by using Java.
                      <h3>★★★★☆</h3>
                    </p>

                    <a href="https://www.udemy.com/course/java-android-complete-guide/" target="_blank" class="btn btn-dark">
                      View Course
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xs-12 col-sm-6 col-md-5 col-lg-3"
                id="cards_landscape_wrap-2"
              >
                <div class="card-flyer">
                  <div class="image-box">
                    <img
                      class="card-img-top"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABhlBMVEUHMEL4ZzRChfTX7/493ITv988AL0IALEP/aTP7aDTd9f8GMEIAJD871oIALUIAIzv2/dQALDgAKjMAIzfPXTYQM0EnW54AJyvaYDaRTTt9mKdvipmElIcAFi07gvXu8/7///+FrPfKXDdEiPvg+P+91uUkQlM/44cgUYk3dNE6OEBgPz8yfvOcTTutUjoAHz51Qz5WPT+tx/pZkvXO3fwAGz1WbWrkYjUAHjO9y68OOky3VjkAFTw/gexCV1oAEzQyuXY4y30VQGYqnmovUGEzbsWOprTj7cguq3AMNlAZZ1UnlGYWXVEPSErO2roeM0EfelyquKEed1sORUk1w3pccm642Pykvcz4Wxz+8u6Wvvm20N8AAC8AAB+ZqJVYPT+DSTwTVE4jh2H0fFZq06NxhHtEYXAjVJGFsfjoraFrn/YtZbMAAB5ZdINxi5oACjpvpJ1oW15gwZgZR3O86ehDOkDnwLz7sp78yLn+49z5eE36mn/6kXTanZGHOyZ0k7H7rplNeLVwRW60AAAdIElEQVR4nO2di1sTy5LAExJ6JulkJiEEASEXTUIEAsPDkPBMEAVEBZSXwhGBuyCLF8/uetyjnru7d//z7Xl393TPIyZ493zWdx4Rkjj9m6rq6uqqnlDop/yUn/JTfso/iwAAfvQl/L8RaXuqHbSAJDQlEn4tUA4uGWgPDX1dSwcl9YlieCowLSAhyZhSy9BfALYnunubkO6JbfuroDTQhGQNWkDZ3dzcVVqoCGBbDIdjVQl6vxWXzPDl5Q2Su3c/9vf3r62tDZPXBEbDYkwT0bcY7w/btKCSCixby4YySbBRSiZLDRhIuQRZ4NMFkwhWOJwNxB8O3o0UCoW4LYW1DPEGqTemfm0s1u1ferUrCce6rTsHE6nOYJI6qZushGQju7iYbSQDjE2oPN95lVW4sLJiLCz2CkFYhQY/FiKkxNdqxLd+1gYeq27DrG8B2xqssGipFtKsYKi2li2rUzYaFcRNWmxscAdPS2IzGV1JllYTjN9B9Q6CsWq4ezuQYg1+jEc8YI3psMY/x8L+ZXRBe7c42iSs1Ils3XQpG32h/UF4UWKNnSXyZulcqFTOkk68EPlo9aoA2JYCsardpfWKB0sc143cn4jvJmhYQcwwtT5bt8chvSj9arxKvvDptUB0p4L+J8DoK5liJfX19k5KGrVA3n3wrkOvWgRrygHL0iymLydZvRRwtyntlhb1FzC66w+WsJnU+Sae7VGqBU7R9CN+DjyxMlm1HdasU5ZPcFSd+1SMICQ3NfWQN6MVfyNTnjV0RsLzJPURoTumjiZo0MaywfbBMs1wXchQsauSeIlpVmoOypR5JM6j2YQkJWDy2aL3sISEUnneaOiMhM0VGtZ9NA6xz59mSQldlDpTr9quWevUGgPU99dTmFpd1J3jqGxEz1+c7UQbpR131ZJkRTg7R0HZXlQP+Bc3Nqg5QQ0bxSpyV6qf93Ba8tn5MySrqxv/xmbVds0iYQmkWm0N02qlifJqpRRd2Vl8Xlqt8HQCgZJ3zxvJ0t6z5/DXRkORJaHyquSYEsD26SkEaDIcX5h0D+Dls2hJl39ho7pdzYL15XWc1UCd40vkSiJRkUPy7speQgjJymJFweNJBGpxd2dDBbUpVBJoVSqtrOycbW6UNp3BBlDTDVDoFWPurgux0oXP6jY1S1BOCLVa9lz9CYlG8sXiq71osvHcmOaAoCi7rzZQDLq6ifyfwVBKnK8kkxu7NCtgiDSlTophZIo8W0z4YHV7mgWV5S2c1YnsY4oCldVkI3p+9ny1dJ5Q4SWyrzZWVFBZC5QxWAVpIP2NmdBjQ/79r6qgF8MZJi35hQ9Wt6ZZ0i8DWHxFxqFu8utGUkoIQuWs9PxXeXN1pbSy+iqLTM/PpzPaQlgXfSGMhFwLW6ySPljdkmYBSq1eJliXzBAUmT7Xoi7lPLlXWtl4BRR/oNSLyLAGXLh0flzwx+p2NEuqD3TiarXvU63UyMmITKUX0Z3dhBIkJ8iB9djxFei7tVnQi1WkcEPc47Zoljw/R8WhvgeMVjLG4mc3mQ2WYUFmeBOhA3GmGUrPV1FwheQ/3FnFD2uEw2sDLFC/INSKFYdyRTqL6lktRM13wsamNSgXyeEO12qM96mhu6L8cunF6i05ObTeDGVILm+G/auVKsreqqpaYHGPmazyEDhIw+LfqMwlJ27n6FUbNKs+iy9v+HEoT6QXpWeLlYrQWGlqB8M/rIynXtUc2xWt1ixqeaME3DIIqWF8aW+v1Ei0F5anXh2/dXy09fksm1XngCNq9CNS4mzn1YvmWPmG5cMGnZ9stWZharW+7KJWUF2U8H4tyX6ifab4hOVpg8eOLcNQGzTLYnVS5838aOkmgO3R0W2AlsR+Z0oI05pA6GrY/mB5sxpkfa5NsFzUCkhgaqIXfRp9RXViLOQnPgfpLunRg56eDz3vPz1Nd7ng8gXLi1WkKDMvqj2wUi9lzvIGSNmJqhgztpLUzMDCqBcu2DX8fmQpb8rIh0ddaR4vP7A8Wf3WYCch2wHLZXkDwLgokptuMXHC1RZh16ORg6Nchy35/FJPjXMzfMCSHnuxKjXY8XAbYKXmAC8OlT5XGX+NGB7j5zTTT5/kc0cHZQxWRy53fXDDVi4fsGqH7hPhb9Fbg8VOsxusxmLMrdyYeCpwaHU96Mh35K4jOKzy9cPI0cwTJi0fsAaPPVhFo7cEK7U1z0yza6z4fweixfoEvPMhr2rSTMQ2w1zHQfwol+vILz1NNwUr08/c9sJY+YAV8y2MHWkT1kCFGyGBKZf7IU4yPge7NFYqLFut7sUPOjR0+aVHTlo+YMHBNb4daqw8YMUWwP0AAu4zYbmm2UE27FpOMer8pMEKN8PyUfyeZZJLIYcSe8OC0mj3f/Jo/ZZ0hTWqjyDW57+IJrs9bugIWUWTOuGrVQhq2598ifU63FZXT96wPMvBI1Yz2MS45PBbnrCg0CfGXnNo/WYk5jmwQsKCPoYAVqhGR7rtWmzUYjbX5Y2pwhYb8fVrMoYQT6lxwUd5U50eXumEclcEq478k66gsIQJ9TqYtOLF85KebH7GyQ4B0O2/5I+U+/aEj9aGLyXXNLvQi6N5/e33L19+//Ya+1msSoZbMD1iuvSZ+JLxMn4PZ4VofaLclhcs03EyaMWLT3VYpVV+kZwwdtrXhJy+w+0GeORDCe8ei30Z+vrly9ehr2Hsp+Ik8Q3pHkuxDqbLhhGS8ZZqiNTaxwuWsGDcn9f/StGKR6C8o8IqbbiUXECg1egGFSpp4LF7Iy3YShQLv/n67TWS8Jehb9iP7+PhA4SmNuWu4yaayHWOgpV/T6qWBywArLtD0YoX5yVhs6Sy8lnL0zaBoGpTef31q25/sddf3uCeDGIjsxQLGaHpsWYKtGI5fLwXLCzUI2kVh6WQ8LyEWAVP/bdYwKh9keIfQ6+tC37zO/aLMWxkd5ZMVpGjsqliEScsymt5wBIwBSdpzaPJSjgrlRo+yp7aLPhc+Prr7xYs8R9vXtuwsPkw+8gMseImq47cPRYsckJ0h0UoOEFrWJ3YpRc/3gbVyxjHYA393fpD7JutZSgytsM0wwrLGCsVnBMWcvH4X+QOS+slwGn9VwFjFZKyG+xE1u2KT1i2h+8a0fEUrnA+8RknrI5HuNPygEUGe2Hxv9XyyLjBSk3/3wYMQyBMd3Xd6epK07lfaQKD9eYPG9ZfcVj2dAjTS7pvv0ekG8wYgrDDB7jTcoeF37OwFtrVbtA8ONzaviF/kk4/6nkysjTypOdRmpzRCc368sV28L9/ZZohDKmwyg+PyDzWTNwRO5Sv/wePWjxg4f4dhXtTAIU8w5kfwAreeTCSz6uuRs39PriDKxc+ZSNt+mb8KRYe+gObDe26WfhUM8IITeYqfk3iKx8VAsDClxExsTqlUuJvMrVR0k9H8tgw8iN4ugkPHZBqDX3T9EkU32CKFRbfYbDQd+WmHVZXviocdZSNsCtX7riKH8x88G2GULJ0SozdH/NbytR6ST9aylMjwyIgcs5GtP4RRgH8H0NfCR8CSFjlgyva6JAlPoxMX6ukOmauDiIP75Xz/mGpWSK1+y1cXZjc9ixmZgnUxfWXPuSpw/MS85Q0QQQ4f7wZevNmaOgfmF4Rk6H2deWH9xywkOFdH8S18Kjw8GgGKVm+xz+sz2L4/sTp2LYgNGd82rYlR0IaRKvwEf37lCfWSg63RGwpYnSfWRb3+tvf//j2mvwZFsBrK0MmLBVXuWPm+nqmXM6pvw4wG0KoNeA27aXSD5aYwrhIn5JfWhoxBVvlClV6B4zeEiNSNGqcVSZ3wHBeCJgqOST5T/7jrO905Xe+AwtbHkAUaBmCu/g+jx0RcQKfwdWMsr28yeUwagjU9dXR9AGS6aOr6xngH9Z3SqthjYQ4m8XIuXrAIvpY0w/U6VBPyeQ6pqetBGmufO+gEDmYnj5CgohFjonSPgpWIRgsKGXkhJzhNSq2GNbSU66mCxPuOfgFYjMMdqlgrnTVQmzMdHJuJhI5munQLVC1xlwPmXWgNgUDwIKCIi/vD5wM7C+DCrN6vrWw8j10TtwWc2uEp1hUj2DXE1W11BA+d+9huTw9rcEq3yscETbZ0UHeHnq72b8vl+rLL9eN/sj1uX1WDVCLYfEVi8olORTrPnVx2nZFbgktDlXXZcDKXVMRvGPLIkM0DsYPWeW3LIHK8hze5JDamq07xtJiWG7VQEQU76VY6nyY1+nkcgeRA33hU44cUTE9fXsAwJ0Wowaec231E6rftjN14tgDbTEs10ozF9VCikV/Ut8JK6ubX7l7V9omNNIxKpZw7oVlbmzVKqwN+mMFiU4/u8CFotViWPTOFCEuXkvk7keXpyNW5OAMvJacPql2N264rYKjNpvHqs5gpW6wL5Kfb/FsOMJ38CGXCVFcYLhTqBkiInRgEYrMeGwbarQeH2tdTsUbn6xCygD77IDUS3LbuMWw8g/caPFjLeZxFfCpfnERI/mQm6HSypzJV6o9vtv/8TLjs7cqJC3zzllIXRCVZq0OSvPv7+CLTfqy2GG82Mf2w+lHGqPrgp7yo3d38h/usEcP1YOKyPo4yK8uhMocD1bnegL/li5HYsUnFFqsX4y8f2QLRQvSK0Tdu1d5I9HzPuWjhzqsK2JD2i2ocwABnyGPljDLP8AjNYCrFvw04iJP/EuexdHhUsA7VpnkGPeu6xnFnF7ikLuHw0IW7zvghMKCWOWdTKMwvbshW3Xie7paInc+ODWUZSbCfYdqOeJR8vJ68mZNKW6GZCLWQ4BaKhTj0IKJdT6rzlQ7jneDXU9oWigGct5684AkXBhhA/7FT58YlOzt+/xSALUKAUkrq+LQ4rt33cX7nSYCSRelW/kP7KmK9vE8724JwvW/D8uaV1T3DdGLJ5/S/tVKs0HDN7JoZfZdYQ0E6wD0e01dn7DJAt37O8x7T/v4WNV7rQvTNW2PbengamTkw4On/J4BhgCTFYeWfOEK66RN+67prgcjunvvGOnh3ns6wezrRCJt9zadzqTT6L+B8p0YKzYt+cQV1ly7imrQiJ4+6FH7a7pczISI48WJAI3QMHhemGDFpCVzwncD1ss2ViBBvXPL9fqxbTF+iNUaoVixaLXYZ2m9gS3ct8VKJrF91XaIgxWDljUbUn1txv8uAsECEgDb29sQCC1TAmsIaAGN3QMh0aQzlWX2BxmsnLSAsm648i2M1brh9lMBDg5EiD6PV8Oiuot7fxIEO3KQKwDqhhgL4/yFzZWNpubpxM7KOeuDTFZOWkYEnxrAAq7UhbEGIiN491EJY9Xw/clRKIDtqfGqOB5qES191SMS5/kqjVLpWRPuVHpRijrP0eKyctCy1oa/WOue1FZ9K6jLAtnu8KlqfgBqJc2fe8OTvPatQAK1GZGaCRPPSlG/RyTiUmmUooxzDbisaFpm1iE1h2hpXTXaK90auV1btEij4QXc8pBNjonjLaEFpGqMngklKdlMXbVWYrzpUAAXVjQt08UjRstz66nOuVkzc+rfvaNJq4+qyoFoabfQGlqfRUcqWX6Fhn0W9ACaxEo06iwxhpILK5qWmSlNdQ7Mv337N+nCOMeDzpS6DGeb1QQIQuHxoMNhijDu/J7FvWh0L+CMmFBbSM4cVuhVLRDDz10GlZdW+LC+vm6FDVt+DxJHoeMES4fAqEv6KYBARuQmnCHV2glEC2SR7a46bVeasDq3KEpmqxZ+q4DM2t3Z8n2MuDReTTB1UJoMtyTgYoX5lY1SNBloxq2ssj8BsuMLuvSSsIyfLpAH60PiHDnDBn2fzgS2Y5xz+qFQ9UqqNC1Slt+TxbwaQQ0bzlm6aPYjJbrJRj0gGK1H1PsdO9KuDYHUZY938xw5GAsHX/u4LxctUT1QCQ8fJEFWVEmEsoL+QsbtR2lEoyuuDSQCBYt75rxUn7VqHTrn9pUA85hQneR9K5TCtNeSFEKc8y2oMc7BYcli0u4jleRK4sXm+WpjJWkcO5fca6yeP09UzIMltflz03XC8Q1LPSq0PjswcDIwsF9RWEfR8ARkRf7J88LCBGmH0vIcIY6wFwwXfVbmy5tm1CQru+dIb1RGuKh/bjw7S2invgor0RLndA/rYv3DUvVAexJJwDJmMObysAxw2k3ezPoWeaI5nTCTYDFu93y4S0U1rISgyOd7URITQWxl9UxJKGrM73GGfCBYzQk4dXn+A3hXJX6ZoTbeUhQWab6oVR/4oqW77LNVPimL1/k8eqvXavIWYEnjC/yRoVCL6DlNbJGsBsjrl4aLRqWGL1rKqtZ7645K54X+9TxF8Z8MFp3x3yLjM2k+Qnb1efzNled+QJmyseixnrgNM+xzM8Mp3AyhQm5SppaJT0rDRImnF61EdiMIq2hpZZN7KromtwFr0s3BT+IkqYR/6oQwDJIVouW6ZykpO74MkMC14Xpm7G3A2nYJHaQJzEZhhVSsdSLwRTZIyWMXWnK2ERSVSiu56eK4bgNWwm9QqpDbbqlZHEZmmGblRks5SzbBSsX1bJFr3m2HBYTR+8xiPP23U9hKGszTq0/snbQNutOq7DSHSqW1wT2w2h2WceoiT7KeqCAA4+EYf6tY6MYCeEqx1vGsBpsVj1blWdOsEK093qnVrrDSoU8P3OSRx+43BMKkdtZcjLOSBlOiXRcmDZOKtY/5WpYN8mlVVr+Dleq4OLTcYHW9dxblkTLiVtiPLPBzr9GuJfYxk3/bsVNbe8gy39QcZoQZl3MInbSUYBEDQ5K7TFousLT+II8CxyVOJWZI9d3bC1ZnW0wcY6SVQRVLwlO1Tevz9pXw9YpFa/H79EqTlSzLb7nA6hrxYuVSrI4ssM86digm9p6Kjo0vAHp7sYOgKkTpKr4X4nW+JUlLOf9+VshvsRJbLrDueLOi+mQxEMKYfTCmWJ0UhHfiON5JrG5PhxewHCNZupqas5MlwFWvVMHbtRKvWsAqyj5zpy2wtHDBssDYuLqfAEar1UnjMVJojhSQjRKbY3VyBT1vm0GG/aAyWwr9tmoJZ94g/NE6d9LygGW0xLIlx4aFUEzEbGd13zjCF0inserEFFBbi7dPu8WFUXwRJBPFOqkBLBUO5o/NR7qQkOLGj4uYe1tcaREs1q6jO6zc9UMXmS4zYEEExT4jTex9Z6kP+s3kQlUUw+if3r5tIoUIF/GFToosoQC1QU3eks93i/f/Tf85diq24nDuzRtl0rF34aFZQ9Mu8peHZQcsIEz1WhYohk+JnS6EC2yPfv68naVLjqjUzDI1F+ktFhkaVoZuvRAcKZnGxoovXKXkxga1QHJuDbnCyt37i9kTy5Ay+i0FC0hZPFyYyDrSDXoxGx3PA4FQrAH2YtYJi36HQhnh3u6isvjKD6tVoaLQaukwRE9YfOeec8ACoA9D1e153rg9SCI1s/ULO9T1hJWgowYtEld8rBMbWiLr1wbFmvUozRbBAttEuOC/Wg1k192M0D8sBwL9270VS99blamwgy6oaSUs+1zamDgepHCUfBzfCW8/yguW8oztdCTPGdKgotZHEELtubYQFhTMw5nEhUDPXQbzhBFyT3/zgAVgkmKgm5G062mGxr6Ow4wp1WqpZpnhwlSgnUVItFKlLuqyJaSD9YDlGGq09KoihYRFyhOxJLmrPvY2S9OOkk9LbiUsaVx7xORpwAOSqBX01oAts+SeojsseipU5dmucuYrvZzcEYRN5xeQE2IrYUGpr9o7Adwf9eqUOtX8iT9gm+iCdIelHTnrGCy9Y88V9jvJWKuloQOUQPCKbZfmz9QJ4TLcYX1/FoslyXZpVsh3NRAuv2zxWHVukSVg7rAqbUAVJetqWgwruMj8dpcUFXC5wmJaYQtg4amaHw2LLm7AWdGrHldY7bFCZIdYqPWjYbm0M27RdaiusOSW5WZIwfstfjAsIHM7sFOOg3LcYPmIPJuEhbXy/GBYCW43IyP14AaLXta1TjCn9WNhgQRXr7acBb5usBIt2NJhy4qdA/yxsFx6ihmpBzdYio81TXOStJH8UFhQwQtISSNk1KO7wao4lnWtEszD/2AzHF62BPdeKWYfoxssoX2w7LD0R8+G1gNSMo9x1WIeGecCC+wm2yVRezq8BVj805ZxwQMuphF6xVmJdsltxVlQytQyGfSfmmeXAXZSHmsm9IR1G9JOWFJt8HLtsIjk+PAuHHTnhe1Ip+bZSfg/LywoIVIR83zBeDx+fCMxj4LVBYB1DyP8E8MCtcvjOLndHo985B+dZ6dLU3O8+uo/K6zM/KGBKq5WJBivC8Ub5gOoQ4R/59a3/zlhgcGPRidEvNh/OTx/effQ+HPhcJ49QmvTwqVJ/U8JC2QOCwaqyxpy8YeHH+eB8ezSeOSSeUSx6d9Tc85jiE0JAEtSlKY7ZPmfbQOszOOiqUZ/+xgpaIeiFg6B+Sjv+Me3DBz1lJcRBoElP375stmnBUnDL+ces7W79bBqN8ZgCmuDx1YZWjxyYzZIFA6dnajW2RFuJ0X4hiUvq43Jvg/oIKW+jpapy8zLaDms2o0ZLRy+PcYHV7i8tH7jCLmMpp3UnNvpB35hIVadahl9c/0PdT3pwaLValgWq0gE0I9YlszD6OPHb6mBmP7ddYA+Yemsmj5gL6GnjVi0WgzLZhVfG6ZKQZFCFayXlCUqW55G6BeWweolp27JU8xjtxm0Wgsrc2kBKjx2Prs7Yz0UIk6eGA6yXjOh9u1+YJms3L/KTWCFR6ulsIhGiAz5bBF1dDf9cXuk+Fn0hn/nrAmtr/cBy2Tl3mXpLnCRQ6ulxWx4Q2AR0KzQ6GyHFinc4NsNqn8nmnVY4gOWZYMEK6ymgP2SOvSDZ4mthEU8TeQ466hej69hsIhn/qj+nWjWaRKWPKv7dnLbX5KWh41hC3A5a7zMZJfNfiZ5fhkQSm1a4qyj8o94tvr3wMp8xPh4aRZ6g+1V6utks06TsMx5kPRX0vB6qnNfe6+0vJ5a1+uYBPWlvisi73eaLy1aTN0SFqq49GIjCO6zBtdsWkWWz/pIPT/YELUr09MIvWHp9Ti0DYb0k+U0tVX7g1Lr2svEVkrNMoaMLnb6sA2TFlkhJpCC3ZMmSo4ydhgaHz50zIbzh/brS3y3YTaFXLLn9OUFS99YSw1Q5qzBSmk/1FagWuc11LbCtZQsFFhbJHUtDUIVPfGlidABZIpWnNV/ScdZx29tlDf4clr175L3Us7TDOs6rX0yHJUvUuheJIy/KGVEq4hsyjjfEXnMFB3iKfu6Rfs9T62ZoBRItm4NHpOqFR+2Ii+SlXrvvY3QByxo0iJNKjF7cqGYDNBLXYWVi5N9vS4aJC5OZsmPKLpFn/ziNwLRYXEbLHLM5Y5NK75WK+KDK9y1ozCSFfLvvmJIH6EDm5aQyGAvzb8pY/0UZBJkqa+yn2LMFG6CYF0PzbjINGshDTKmryrcncdoxftrhsd3pLSg7L4mNMUHLI5uBRTTBgNEtnfUh3MOucl1jpGiAYP9hrOKf3xrJJfjheIlKJrJUzpZKlz4O8LTTwTfClqBbTCkd4WVOc/m1MTxxFdD1Cd168M5nJ/vPy4Wi4c3b++aQzx0PJcaLPvLD/taG8L6wHfSCm6Doe/pZM3MH5tJ5MMbqVarPe431SrC2rLweQf9ZR1M3ZptMkMvBLfB0Hf1SIPBu6ZyxZFNWj2ohUPosnfoJT7zWQat9aD1+Iaoq4mgeuXvaVb59+ytMJiR1iJUUBqPHz/m7YT5Er+ZUt0SvydTGphVKM14VpADFrfmA9Tm+4v2Nit6dXhZ+74zSX3n4BGtoMf62yJfdHYO+I1FbUmPeNDKkw+ppgRkapdrx0XVCIvHhzfzg03ahSVooU7IXb5XkqHrQViuIgPYxF4HTPe4PfxrZOTJJ/fHkalFNLVaBtZqPspofFwPnMfF1f19zynETX427fFULx+VbBBC0ESTCvu7ACGte2zIT/kpP+Wn/BSO/B+w1pI/g+UlcQAAAABJRU5ErkJggg=="
                      alt="Card image cap"
                      height="200px"
                    />
                  </div>
                  <div class="card-body text-container">
                    <h5 class="card-title text-start">Android App Development...</h5>
                    <p class="card-text text-start">
                    Android App Development for complete beginners, make beautiful apps, get a job in 2021, Java AND Kotlin!
                      <h3>★★★★☆</h3>
                    </p>

                    <a href="https://www.udemy.com/course/the-complete-android-developer-bootcamp/" target="_blank" class="btn btn-dark">
                      View Course
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-5 col-lg-3"
                id="cards_landscape_wrap-2"
              >
                <div class="card-flyer">
                  <div class="image-box">
                    <img
                      class="card-img-top"
                      src="https://www.educative.io/v2api/collection/6100126873419776/6055343571337216/image/4657441726791680"
                      alt="Card image cap"
                      height="200px"
                    />
                  </div>
                  <div class="card-body text-container">
                    <h5 class="card-title text-start">The Comprehensive 2021...</h5>
                    <p class="card-text text-start">
                    Master Modern Android API's: ROOM Database, ML Kit Face Recognition, Firestore, FirebaseMaps and Android Studio
                      <h3>★★★★☆</h3>
                    </p>

                    <a href="https://www.udemy.com/course/android-development-java-android-studio-masterclass/" target="_blank" class="btn btn-dark">
                      View Course
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-5 col-lg-3"
                id="cards_landscape_wrap-2"
              >
                <div class="card-flyer">
                  <div class="image-box">
                    <img
                      class="card-img-top"
                      src="https://www.spaceotechnologies.com/wp-content/uploads/2020/12/android_app_development_course_for_beginners1.png"
                      alt="Card image cap"
                      height="200px"
                    />
                  </div>
                  <div class="card-body text-container">
                    <h5 class="card-title text-start">The Complete Android Kotlin...</h5>
                    <p class="card-text text-start">
                    Learn how to build 17 online games, and apps for Android Q, like Pokémon , twitter,Tic Tac Toe, and notepad using Kotlin
                      <h3>★★★★☆</h3>
                    </p>

                    <a href="https://www.udemy.com/course/the-complete-kotlin-developer-course/" target="_blank" class="btn btn-dark">
                      View Course
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-5 col-lg-3"
                id="cards_landscape_wrap-2"
              >
                <div class="card-flyer">
                  <div class="image-box">
                    <img
                      class="card-img-top"
                      src="https://udemydownload.com/wp-content/uploads/2021/04/Flutter-Firebase-Build-a-Complete-App-for-iOS-Android-390x220.jpg"
                      alt="Card image cap"
                      height="200px"
                    />
                  </div>
                  <div class="card-body text-container">
                    <h5 class="card-title text-start">Android App Development...</h5>
                    <p class="card-text text-start">
                    Learn Kotlin Android App Development And Become an Android Developer. Incl. Kotlin Tutorial and Android Tutorial.
                      <h3>★★★★☆</h3>
                    </p>

                    <a href="https://www.udemy.com/course/android-oreo-kotlin-app-masterclass/" target="_blank" class="btn btn-dark">
                      View Course
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xs-12 col-sm-6 col-md-5 col-lg-3"
                id="cards_landscape_wrap-2"
              >
                <div class="card-flyer">
                  <div class="image-box">
                    <img
                      class="card-img-top"
                      src="https://miro.medium.com/max/966/1*ZQJ7-0G48FRy72VJ77hrfA.png"
                      alt="Card image cap"
                      height="200px"
                    />
                  </div>
                  <div class="card-body text-container">
                    <h5 class="card-title text-start">The Complete Android 11 Jetpack...</h5>
                    <p class="card-text text-start">
                    Android Development with Jetpack, MVVM Clean Architecture, Compose
                      <h3>★★★★☆</h3>
                    </p>

                    <a href="https://www.udemy.com/course/android-architecture-componentsmvvm-with-dagger-retrofit/" target="_blank" class="btn btn-dark">
                      View Course
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-5 col-lg-3"
                id="cards_landscape_wrap-2"
              >
                <div class="card-flyer">
                  <div class="image-box">
                    <img
                      class="card-img-top"
                      src="https://i0.wp.com/freecoursewebsite.com/wp-content/uploads/2020/09/Download-Android-App-Development-Masterclass-using-Kotlin-2020.jpg?fit=521%2C305&ssl=1&resize=350%2C200"
                      alt="Card image cap"
                      height="200px"
                    />
                  </div>
                  <div class="card-body text-container">
                    <h5 class="card-title text-start">Kotlin Coroutines for Android Masterclass</h5>
                    <p class="card-text text-start">
                    Learn Kotlin Coroutines in depth and practice advanced Coroutines use cases in Android application
                      <h3>★★★★☆</h3>
                    </p>

                    <a href="https://www.udemy.com/course/kotlin-coroutines-in-android/" target="_blank" class="btn btn-dark">
                      View Course
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-5 col-lg-3"
                id="cards_landscape_wrap-2"
              >
                <div class="card-flyer">
                  <div class="image-box">
                    <img
                      class="card-img-top"
                      src="https://freecourseudemy.com/wp-content/uploads/2020/01/The-Complete-Android-Kotlin-Developer-Course-1.jpg"
                      alt="Card image cap"
                      height="200px"
                    />
                  </div>
                  <div class="card-body text-container">
                    <h5 class="card-title text-start">Android Architecture Masterclass</h5>
                    <p class="card-text text-start">
                    Embrace clean design and architecture in your Android applications
                      <h3>★★★★☆</h3>
                    </p>

                    <a href="https://www.udemy.com/course/android-architecture/" target="_blank" class="btn btn-dark">
                      View Course
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-5 col-lg-3"
                id="cards_landscape_wrap-2"
              >
                <div class="card-flyer">
                  <div class="image-box">
                    <img
                      class="card-img-top"
                      src="http://www.cromacampus.com/wp-content/uploads/2017/08/android-training-croma-campus.jpg"
                      alt="Card image cap"
                      height="200px"
                    />
                  </div>
                  <div class="card-body text-container">
                    <h5 class="card-title text-start">How to Make a Freaking Android App</h5>
                    <p class="card-text text-start">
                    Make apps for Android M - Marshmallow, using Android Studio for Mac or Windows.
                      <h3>★★★★☆</h3>
                    </p>

                    <a href="https://www.udemy.com/course/how-to-make-a-freaking-android-app/" target="_blank" class="btn btn-dark">
                      View Course
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Game;
