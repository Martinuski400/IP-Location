const OPTIONS = {
    method: 'GET',
    url: 'https://ip-directory.p.rapidapi.com/lookup/142.147.89.228',
    params: {
      risk: 'true',
      hostname: 'false'
    },
    headers: {
      'X-RapidAPI-Key': '1d7c7d25d0msh3128727324f1946p14a8b7jsn37223d40f295',
      'X-RapidAPI-Host': 'ip-directory.p.rapidapi.com'
    }
  };
  
  const fetchIpInfo = async ip => {
    try {
      const res = await fetch(`https://ip-directory.p.rapidapi.com/lookup/${ip}`, OPTIONS);
      const ipInfo = await res.json();
      // Resto de tu código...
      return ipInfo; // Asegúrate de devolver la información obtenida
    } catch (err) {
      console.error(err);
      // Maneja el error de manera adecuada (por ejemplo, muestra un mensaje de error al usuario)
      throw err; // Lanza una excepción para manejarla en otro lugar si es necesario
    }
  };
  
  const $ = selector => document.querySelector(selector);
  
  const $form = $('#form');
  const $input = $('#input');
  const $submit = $('#submit');
  const $results = $('#results');
  
  $form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { value } = $input;
    if (!value) return;
  
    $submit.setAttribute('disabled', '');
    $submit.setAttribute('aria-busy', 'true');
  
    try {
      const ipInfo = await fetchIpInfo(value);
  
      if (ipInfo) {
        $results.innerHTML = JSON.stringify(ipInfo, null, 2);
        // Procesa la información de ipInfo según tus necesidades
      }
    } catch (err) {
      console.error(err);
      // Maneja el error de manera adecuada (por ejemplo, muestra un mensaje de error al usuario)
    } finally {
      $submit.removeAttribute('disabled');
      $submit.removeAttribute('aria-busy');
    }
  });
  