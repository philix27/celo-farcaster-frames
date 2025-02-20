export function truncateAddress(addrr: string) {
  return addrr
    .slice(0, 4)
    .concat("....", addrr.slice(addrr.length - 5, addrr.length - 1));
}
