//
//  UIViewController+Extensions.swift
//  RNSwiftDemo
//
//  Created by lixingle on 2018/3/21.
//  Copyright © 2018年 com.lvesli. All rights reserved.
//

import Foundation
public extension UIViewController {
    public static var topController: UIViewController? {
        get {
            var window = UIApplication.shared.keyWindow
            if window?.windowLevel != UIWindowLevelNormal {
                window = UIApplication.shared.windows.filter { $0.windowLevel == UIWindowLevelNormal }.first ?? window
            }
            
            let frontView = window?.subviews.last
            let nextResponder = frontView?.next
            
            func getTopFromVC(_ vc: UIViewController) -> UIViewController {
                var topController = vc
                while let presentedViewController = topController.presentedViewController {
                    topController = presentedViewController
                }
                if let nav = topController as? UINavigationController {
                    if let vc = nav.viewControllers.last {
                        topController = vc
                    }
                } else if let tab = topController as? UITabBarController {
                    if let nav = tab.selectedViewController as? UINavigationController {
                        if let vc = nav.viewControllers.last {
                            topController = vc
                        }
                    } else {
                        topController = tab
                    }
                }
                return topController
            }
            if let vc = nextResponder as? UIViewController {
                return getTopFromVC(vc)
            } else {
                if let vc = window?.rootViewController {
                    return getTopFromVC(vc)
                }
                return nil
            }
        }
    }
}
