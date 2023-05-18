export function validateAddress(ipOrDomain: string) {
  // Regex expression for validating IPv4
  let ipv4 =
    /(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])/;
  // Regex expression for validating IPv6
  let ipv6 = /((([0-9a-fA-F]){1,4})\:){7}([0-9a-fA-F]){1,4}/;
  // Regex expression for validating domain
  let domain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;

  if (ipOrDomain.match(ipv4) || ipOrDomain.match(ipv6)) return "ipAddress";
  if (ipOrDomain.match(domain)) return "domain";
  return null;
}
