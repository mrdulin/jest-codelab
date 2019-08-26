const noopTimer = setTimeout(() => {}, 0);

class PubSub {
  public static publish(message) {
    console.log(message);
  }
}

export { PubSub };
