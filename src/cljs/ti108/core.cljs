(ns ti108.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [reagent.debug :as debug]
   [ti108.model :as m]))


(def button-defs [
     {:s "+/-" :e m/plus-minus}
     {:s "√" :e m/sqrt}
     {:s "%" :e m/percent}
     {:s "÷" :wide-berth true :e (m/prep-2op m/div)}
     {:s "MRC" :e m/mrc}
     {:s "M-" :e m/m-}
     {:s "M+" :e m/m+}
     {:s "×" :wide-berth true :e (m/prep-2op m/mul)}
     {:s "7" :digit true :e (m/add-digit 7)}
     {:s "8" :digit true :e (m/add-digit 8)}
     {:s "9" :digit true :e (m/add-digit 9)}
     {:s "˗" :wide-berth true :e (m/prep-2op m/sub)}
     {:s "4" :digit true :e (m/add-digit 4)}
     {:s "5" :digit true :e (m/add-digit 5)}
     {:s "6" :digit true :e (m/add-digit 6)}
     {:s "˖" :wide-berth true :e (m/prep-2op m/add)}
     {:s "1" :digit true :e (m/add-digit 1)}
     {:s "2" :digit true :e (m/add-digit 2)}
     {:s "3" :digit true :e (m/add-digit 3)}
     {:s "=" :wide-berth true :e m/do=}
     {:s "ON/C" :e m/reset}
     {:s "0" :digit true :e (m/add-digit 0)}
     {:s "." :digit true :e m/add-dp}
     ])



(defn button-classes [b]
  [
   (if (:digit b) "digit" "func")
   (when (:wide-berth b) "wide-berth")])

(defn button [b]
     ^{:key (:s b)} [:button {:class (button-classes b)
     	    	    	     :on-click (:e b)}
			     (:s b)])

(defn buttons []
      [:div.buttonWrapper
	 (map button button-defs)])

(defn display []
 [:div.displayWrapper
  [:div.display (m/as-string)]])


(defn branding []
   [:div.brandingWrapper
	[:div.company "TEXAS INSTRUMENTS"]
	[:div.model "TI-108"]
	[:div.solar]])

(defn calculator []
  [:div.calculator
    [display]
    [branding]
    [buttons]])


(defn mount-root []
   (rdom/render [calculator] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
