export default {
  async fetch(request, env, ctx) {
    const gpc = request.headers.get("Sec-GPC") == "1"
    const dnt = request.headers.get("DNT") == "1"
    return new Response(JSON.stringify({
      isEnabled: gpc || dnt,
      gpc,
      dnt
    }), {
      headers: {
        "content-type": "application/json;charset=UTF-8'"
      }
    });
  },
};
