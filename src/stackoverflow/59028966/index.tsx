import { Subject } from "rxjs";
import React, { useState, useEffect } from "react";
// import styles from "../index.scss";

const styles = {
  progressCard: "progressCard",
  progressBar: "progressBar",
  liveData: "liveData",
  label: "label",
  value: "value",
  progressDetail: "progressDetail",
  targetData: "targetData"
};

function useObservable({ subject, initialValue }) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const subscription = subject.subscribe({
      next: v => setValue(v)
    });
    return () => subscription.unsubscribe();
  }, [subject]);
  return value;
}

const subject = new Subject();

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function OrderProgress({ orderData }) {
  setInterval(() => {
    subject.next({
      change: exports.getRndInteger(0, 120)
    });
  }, 10000);

  const LIVE_VALUE = useObservable({
    subject,
    initialValue: { change: 100 }
  });
  const LIVE_STATUS = LIVE_VALUE.change;
  return (
    <div className={styles.progressCard}>
      <div
        className={styles.progressBar}
        style={{
          width: `${(100 / orderData.price) * LIVE_STATUS}%`,
          maxWidth: "99%"
        }}
      />
      <div className={styles.liveData}>
        <span className={styles.label}>LIVE</span>
        {/* TODO: data from socket */}
        <span className={styles.value}>{LIVE_STATUS}</span>
      </div>
      <div className={styles.progressDetail}>
        {orderData.exchange}: Awaiting Execution…
      </div>
      <div className={styles.targetData}>
        <span className={styles.label}>Target</span>
        <span className={styles.value}>{orderData.price}</span>
      </div>
    </div>
  );
}

exports.getRndInteger = getRndInteger;
exports.OrderProgress = OrderProgress;
exports.useObservable = useObservable;
exports.subject = subject;
