import React from 'react'

export default function subscribe() {
  return (
    <div>
      <span className={styles.subscribe}>Subscribe to our Newsletter</span>
          <div className={styles.inputGroup}>
            <InputField
              name="subscribe"
              type={"text"}
              placeholder={"Enter your email"}
              value={subscribe} 
              onChange={(e) => setSubscribe(e.target.value)}
            />
            <Button type={"button"} bg={styles.button} text={"SUBSCRIBE"} />
          </div>
    </div>
  )
}
