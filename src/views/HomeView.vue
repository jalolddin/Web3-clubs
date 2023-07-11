<template>
  <div class="home">
    <v-card>
      <v-layout>
        <SidebarMobile class="mobile"/>
        <Sidebar class="desktop" />
<v-main>
  <div class="home__navbar">
    <v-img class="logo" src="../assets/images/logo.svg"></v-img>
    <v-img class="menu" @click="toggleSidebar" src="../assets/images/burger-menu.svg"></v-img>
  </div>
  <div class="home__header">
    <div class="home__header__left">
      <h1>Мы не одни в своем убеждении, что токенизация активов - это будущее. </h1>
      <p>Добро пожаловать в Smart Tech Hub - платформу, где инновации и прогрессивные технологии встречаются с реальным бизнесом и криптовалютами. Мы предлагаем уникальные решения, которые помогают бизнесу и инвесторам использовать все преимущества цифровой экономики, сохраняя при этом привычные бизнес-процессы.</p>
      <div class="home__header__left__buttons">
        <button>Присоединиться</button>
        <button>Войти <span aria-hidden="true">→</span></button>
      </div>
    </div>
    <div class="home__header__right">
      <v-img src="../assets/images/first.jpeg"></v-img>
    </div>
  </div>
  <!-- HEADER END -->

  <!-- QUOTES -->
  <div class="quotes__container">
      <div class="home__quotes">
        <v-img class="quote" src="../assets/images/quotes.svg"></v-img>
        <p class="quote__text">Я думаю, что токенизация активов - это очень интересная идея. У нее есть потенциал сделать активы более ликвидными и доступными и увеличить прозрачность.</p>
        <div class="line"></div>
        <div class="author">
        <v-avatar size="65px">
            <v-img alt="Avatar" src="https://reosh.ru/wp-content/uploads/2022/06/05-2-1024x611.jpg"></v-img>
        </v-avatar>
          <div>
            <h1>Джейми Даймон</h1>
            <p>генеральный директор JPMorgan Chase</p>
          </div>
        </div>
      </div>
      <div class="home__quotes">
          <v-img class="quote" src="../assets/images/quotes.svg"></v-img>
          <p class="quote__text">Я думаю, что токенизация активов - это очень деструктивная технология. У нее есть потенциал изменить то, как мы думаем о деньгах и финансах.</p>
          <div class="line"></div>
        <div class="author">
        <v-avatar size="65px">
            <v-img alt="Avatar" src="https://www.spot.uz/media/img/2021/02/rP4Xw716143484659422_l.jpg"></v-img>
        </v-avatar>
          <div>
            <h1>Илон Маск</h1>
            <p>генеральный директор Tesla и SpaceX и Twitter</p>
          </div>
        </div>
      </div>
      <div class="home__quotes">
        <v-img class="quote" src="../assets/images/quotes.svg"></v-img>
        <p class="quote__text">Я думаю, что токенизация активов - это очень интересная идея. У нее есть потенциал сделать активы более ликвидными и доступными и увеличить прозрачность.</p>
        <div class="line"></div>
        <div class="author">
        <v-avatar size="70px">
            <v-img alt="Avatar" src="https://cdn.fishki.net/upload/post/2019/07/08/3026350/d7cdeb48965197dbb076291eb2c504c8.jpg"></v-img>
        </v-avatar>
          <div>
            <h1>Ллойд Бланкфейн</h1>
            <p>бывший директор Goldman Sachs</p>
          </div>
        </div>
      </div>
</div>
  <div class="home__second">
      <h1>Возможности Smart Tech Hub</h1>
      <p>Мы представляем себе будущее, в котором люди могут инвестировать в стартапы и другие компании через криптовалюту, получая токены, которые дают им частичное владение этими компаниями.</p>
  </div>
 
  <!-- ANYLIZE WALLET -->
  <div class="home__anylize left">
      <div class="home__anylize__left">
          <v-img src="../assets/images/second.jpg"></v-img>
      </div>
      <div class="text">
        <span>Токенизация</span>
        <h1>Токенизация активов</h1>
        <p>Мы помогаем компаниям токенизировать свои активы, превращая традиционные активы в цифровые токены, которые могут быть легко и быстро проданы, куплены или обменяны.</p>
      </div>
  </div>

  <!-- HOME LIST -->
  <div class="home__list right">
    <div class="text">
      <span>Интеграция</span>
      <h1>Интеграция криптовалют</h1>
      <p>Мы предлагаем решения для интеграции криптовалютных транзакций в бизнес-процессы компаний. Это позволяет бизнесу принимать криптовалюты в качестве оплаты за товары и услуги, а также использовать криптовалюты для внутренних операций.</p>
    </div>
    <div class="home__list__right">
      <v-img src="../assets/images/third.jpg"></v-img>
    </div>
  </div>

  <!-- HOME FEED -->
  <div class="home__feed left">
    <div class="home__feed__left">
      <v-img src="../assets/images/fourth.jpg"></v-img>
    </div>
    <div class="text">
      <span>Инвестиция</span>
      <h1>Инвестиционные возможности</h1>
      <p>Мы предоставляем инвесторам доступ к высокодоходным инвестиционным проектам в сфере криптовалют и блокчейна.</p>
    </div>
</div>

<!-- HOME DETECTOR -->
<div class="home__detector right">
  <div class="text">
    <span>Обучение</span>
    <h1>Обучение и консультации</h1>
    <p>Мы предлагаем обучающие программы и консультации по вопросам использования криптовалют и блокчейна в бизнесе.</p>
  </div>
  <div class="home__list__right">
    <v-img src="../assets/images/fifth.jpg"></v-img>
  </div>
</div>

<!-- HOME ARBITAGE -->
<div class="home__arbitage home__second">
  <h1>Smart Tech Hub</h1>
  <p> это место, где криптовалюты становятся частью реального бизнеса.</p>
</div>

<!-- HOME DEX -->
<div class="home__dex right">
  <div class="text">
    <span>О нас</span>
    <h1>Присоединяйтесь к <br> Smart Tech Hub</h1>
    <p>Smart Tech Hub - это место, где криптовалюты становятся частью реального бизнеса. Мы помогаем компаниям и инвесторам открыть для себя новые возможности, которые предоставляет цифровая экономика.</p>
  </div>
  <div class="home__list__right">
    <v-img src="../assets/images/first.jpeg"></v-img>
  </div>
</div>

<!-- HOME CEX -->
<div class="home__cex left">
  <div class="home__feed__left">
    <v-img src="../assets/images/second.jpg"></v-img>
  </div>
  <div class="text">
    <span>Криптовалюта и блокчейн</span>
    <h1>Мы верим в то, что криптовалюты и блокчейн могут принести реальную пользу бизнесу</h1>
    <p>наша цель - помочь вам в этом. Вместе мы можем создать новую экономику, где цифровые и традиционные активы существуют бок о бок, дополняя и усиливая друг друга.</p>
  </div>
</div>

<!-- HOME CHAIN -->
<div class="home__chain right">
  <div class="text">
    <span>Экосистема</span>
    <h1>Smart Tech Hub</h1>
    <p>это не просто платформа, это целый экосистема, где технологии блокчейна и криптовалюты встречаются с реальным бизнесом. Мы предлагаем инструменты и решения, которые позволяют компаниям интегрировать криптовалютные транзакции в свою повседневную деятельность, открывая новые возможности для роста и развития.</p>
  </div>
  <div class="home__list__right">
    <v-img src="../assets/images/third.jpg"></v-img>
  </div>
</div>
<!-- HOME ACTIVITIES -->
<div class="home__activities home__second">
  <h1>Все просто и прозрачно</h1>
  <p>Для начала вам необходимо зарегистрироваться на нашей платформе и активно использовать наши продукты.</p>
</div>

<!-- HOME PRICING -->
<!-- <div class="home__pricing">
  <div class="home__second">
    <h1>Pricing</h1>
    <p>Discover our pricing plans and choose the subscription which fits your needs.</p>
  </div>
    <Free />
    <div class="paid">
      <Basic />
      <BasicAlpha />
      <Pro />
    </div>
</div> -->
<div class="home__profits">
  <h1>Присоединяйтесь к <span>Smart Tech Hub</span> <br> и откройте для себя мир.</h1>
  <p>Попробуйте наши IT-продукты и увидите, как они могут преобразить ваш бизнес. Зарегистрируйтесь на платформе уже сегодня и начните свое путешествие в мир инноваций и технологий!</p>
  <button><a href="https://smart4u.tech/">Присоединиться</a></button>
</div>

<svg viewBox="0 0 1024 1024" class="absolute effect top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true"><circle cx="512" cy="512" r="512" fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fill-opacity="0.7"></circle><defs><radialGradient id="8d958450-c69f-4251-94bc-4e091a323369"><stop stop-color="#7775D6"></stop><stop offset="1" stop-color="#E935C1"></stop></radialGradient></defs></svg>

<Footer />
</v-main>
</v-layout>
</v-card>
  </div>
</template>

<script>
import Free from '../components/Free.vue'
import Basic from '../components/Basic.vue'
import BasicAlpha from '../components/BasicAlpha.vue'
import Pro from '../components/Pro.vue'
import Footer from '../components/Footer.vue'
import Sidebar from '../components/Sidebar.vue'
import SidebarMobile from '../components/SidebarMobile.vue'
import { mapMutations } from 'vuex'
export default {
  inject: ["updateBreakpoints"],
  name: 'HomeView',
  components: {
    Sidebar,
    Free,
    Basic,
    BasicAlpha,
    Pro,
    Footer,
    SidebarMobile
  },
  methods:{
    ...mapMutations(['setSidebarOpen']),
    toggleSidebar(){
      this.setSidebarOpen(true)
    }
  }
}
</script>
