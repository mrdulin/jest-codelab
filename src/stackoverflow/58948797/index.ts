export function main() {
  const RedisEnableCache = process.env.REDIS_ENABLE_CACHE || false;
  if (RedisEnableCache === "true") {
    console.log("enable redis cache");
  } else {
    console.log("disable redis cache");
  }
}
