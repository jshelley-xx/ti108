(ns ti108.model
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [reagent.debug :as debug]
   [decimal.core :as dc]))

(def empty-register {:buffer nil :dp false :malleable true})

(def other (atom nil)) 
(def op (atom nil))

(def memory (atom empty-register))

(def register (atom empty-register))


(defn reset []
  (reset! register empty-register)
  (reset! op nil)
  (reset! other nil))

(defn reset-if-not-malleable []
  (when (not (:malleable @register)) (reset)))

(defn add-digit [n]
  #(do
    (debug/log (str "mealleable: " (:malleable @register)))
    (reset-if-not-malleable)
    (swap! register assoc :buffer (str (:buffer @register) n))))
   
(defn add-dp []
 (reset-if-not-malleable)
 (when (not (:dp @register))
   (swap! register assoc :dp true
                         :buffer (str (:buffer @register) "."))))

(defn plus-minus []
  (reset-if-not-malleable)
  (swap! register assoc :buffer (if (clojure.string/starts-with? (:buffer @register) "-")
      		    	   	   (subs (:buffer @register) 1)
				   (str "-" (:buffer @register)))))

(defn prep-2op [o]
  #(do
     (reset! other @register)
     (reset! register empty-register)
     (reset! op o)))

(defn tonum [n] (dc/decimal (:buffer n)))




(defn fromnum [n]
  (debug/log (dc/to-string n))
  {:buffer (dc/to-string n)
   :dp (not (dc/integer? n))
   :malleable false})

(defn do= []
 (reset! register (fromnum (@op (tonum @other) (tonum @register)))))


(defn sqrt []
  (reset! register (fromnum (dc/sqrt (tonum @register)))))


(defn as-string []
   (str
     (if (nil? (:buffer @register))
       "0"
       (:buffer @register))
     (when (not (:dp @register)) ".")))


(defn percent []
  (reset! register (fromnum (/ (tonum @register) 100)))
  (do=))

(defn mrc []
      (reset! register @memory)
      (reset! memory empty-register))
      
(defn m+ []
 (reset! memory
   (if (not (:buffer @memory))
     @register
     (fromnum (dc/+ (tonum @memory) (tonum @register)))))
 (swap! register assoc :malleable false))
     
(defn m- []
 (reset! memory
   (if (not (:buffer @memory))
     @register
     (fromnum (dc/- (tonum @memory) (tonum @register)))))
 (swap! register assoc :malleable false))
     

(def add dc/+)
(def sub dc/-)
(def mul dc/*)
(def div dc/div)
