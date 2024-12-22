addEventListener('fetch', function(event) {
    const { request } = event
    const response = handleRequest(request)

    event.respondWith(response)
})

async function handleRequest(request) {
    const contype = 'application/dns-message'
    const { method, headers, url } = request
    const { host, searchParams } = new URL(url)

    if (headers.get('host')=='resolver2.example.net') {
        // Endpoint #2

        var doh = 'https://dns.controld.com/id2'
    } else if (headers.get('host')=='resolver3.example.net') {
        // Endpoint #3

        var doh = 'https://dns.controld.com/id3'
    } else {
        // Unmatched

        var doh = 'https://freedns.controld.com/p2'
    }

    if (method == 'GET' && searchParams.has('dns')) {
        return await fetch(doh + '?dns=' + searchParams.get('dns'), {
            method: 'GET',
            headers: {
                'Accept': contype,
            }
        });
    } else if (method == 'POST' && headers.get('content-type')=='application/dns-message') {
        return await fetch(doh, {
            method: 'POST',
            headers: {
                'Accept': contype,
                'Content-Type': contype,
            },
            body: await request.arrayBuffer()
        });
    } else {
        return new Response("", {status: 404})
    }
}