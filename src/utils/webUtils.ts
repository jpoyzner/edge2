export function buildURL(URL: string, params: any[]): string {
	const firstParam: any = params.shift();
	if (firstParam) {
		const [param, paramValue] = firstParam;
		URL += `?${param}=${paramValue}`;
		params.forEach(([param, paramValue]) => URL += `&${param}=${paramValue}`);
  }
  return URL;
};

export function getParamsFromSearch(search: string): any {
  const params: any = {};

  search.slice(1).split('&').forEach((entry: string) => {
    const [criterion, input] = entry.split('=');
    params[criterion] = input;
  });

  return params;
}

export function getURLWithLocation(path: string): any {
  return `${window.location.origin}${path}`
}

//https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
export function validateUrl(url: string) : boolean {
  return /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/.test(url); 
  // let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  // '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
  // '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  // '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  // '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  // '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  // return !!pattern.test(url);
}