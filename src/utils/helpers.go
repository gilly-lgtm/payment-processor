package paymentprocessor

import (
	"crypto/rand"
	"encoding/hex"
	"fmt"
	"log"
	"net/http"
	"time"
)

const (
	secretKeyLength = 32
)

type paymentProcessorError struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
}

func (e paymentProcessorError) Error() string {
	return fmt.Sprintf("PaymentProcessorError: %d - %s", e.Code, e.Message)
}

func generateRandomSecretKey() (string, error) {
	key := make([]byte, secretKeyLength)
	_, err := rand.Read(key)
	if err!= nil {
		return "", err
	}
	return hex.EncodeToString(key), nil
}

func getRemoteIP(r *http.Request) string {
	if r.Header.Get("X-Forwarded-For")!= "" {
		return r.Header.Get("X-Forwarded-For")
	}
	if r.Header.Get("X-Real-IP")!= "" {
		return r.Header.Get("X-Real-IP")
	}
	return r.RemoteAddr
}

func logRequest(r *http.Request, message string) {
	log.Printf("%s - %s - %s - %s", time.Now().Format("2006-01-02 15:04:05"), r.Method, r.URL.Path, message)
}