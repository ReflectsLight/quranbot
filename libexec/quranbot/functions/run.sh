##
# vars
localbase=$(realpath "$(dirname "${0}")"/..)
etc="${localbase}"/etc/quranbot

##
# functions
run()
{
    deno run --config "${etc}"/deno.json "${@}"
}
