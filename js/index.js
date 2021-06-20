window.onload = function () {

   const annotate = RoughNotation.annotate;
   const annotationGroup = RoughNotation.annotationGroup;

   function light_theme_highlight() {
      const a1 = annotate(document.querySelector('#proyect-header'), { type: 'highlight', color: '#FFD54F' });

      const proyect_names = document.querySelectorAll('.proyectos h2')
      const contact = annotate(document.querySelector('#contacto h2'), { type: 'highlight', color: '#FFD54F' })
      const a2 = annotate(proyect_names[0], { type: 'highlight', color: '#b8c1ec' });
      const a3 = annotate(proyect_names[1], { type: 'highlight', color: '#eebbc3' });
      const a4 = annotate(proyect_names[2], { type: 'highlight', color: '#c3f0ca' });

      let welp = annotationGroup([a1, contact, a2, a3, a4])
      welp.show()
      return welp
   }

   function dark_theme_highlight() {
      const a1 = annotate(document.querySelector('#proyect-header'), { type: 'highlight', color: '#dacec8' });

      const proyect_names = document.querySelectorAll('.proyectos h2')
      const conf = { type: 'highlight', color: '#dacec8' }
      const contact = annotate(document.querySelector('#contacto h2'), conf)
      const a2 = annotate(proyect_names[0], conf);
      const a3 = annotate(proyect_names[1], conf);
      const a4 = annotate(proyect_names[2], conf);

      let welp = annotationGroup([a1, contact, a2, a3, a4])
      welp.show()
      return welp
   }

   setTimeout(() => {
      // const config = { type: 'underline', strokeWidth: 3, padding: 2, color: '#B71C1C' };
      const config = { type: 'highlight', color: '#dacec8' };
      const span_tech_introduction = document.querySelectorAll('.introduction span')
      const s1 = annotate(span_tech_introduction[0], config);
      const s2 = annotate(span_tech_introduction[1], config);
      const s3 = annotate(span_tech_introduction[2], config);
      const s4 = annotate(span_tech_introduction[3], config);

      annotationGroup([s1, s2, s3, s4]).show()
   }, 8000);


   let theme = localStorage.getItem('theme')

   const light = light_theme_highlight()
   const dark = dark_theme_highlight()

   if (theme == null) {
      setTheme('light')
      dark.hide()
   } else {
      setTheme(theme)
      if (theme === 'light') { dark.hide() }
      else { light.hide() }
   }

   let themeDots = document.getElementById('theme-icon')

   themeDots.onclick = () => {
      let mode = themeDots.dataset.mode
      if (mode === 'light') {
         setTheme('dark')
         themeDots.dataset.mode = 'dark'
         dark.show()
         light.hide()
      } else {
         setTheme('light')
         themeDots.dataset.mode = 'light'
         light.show()
         dark.hide()
      }
   }

   function setTheme(mode) {
      if (mode == 'light') {
         document.getElementById('theme-style').href = 'css/light.css'
      }

      if (mode == 'dark') {
         document.getElementById('theme-style').href = 'css/dark.css'
      }
      localStorage.setItem('theme', mode)
   }
};