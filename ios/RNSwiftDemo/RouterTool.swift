//
//  RouterTool.swift
//  RNSwiftDemo
//
//  Created by lixingle on 2018/3/21.
//  Copyright © 2018年 com.lvesli. All rights reserved.
//

import UIKit

class RouterTool: NSObject {
    @objc  static func routeBackToNative()  {
        DispatchQueue.main.async {
            UIViewController.topController?.navigationController?.popViewController(animated: true)
        }
    }
    @objc static func routeToNative(name:String?, storyboardName:String?)  {
        if let name = name,let storyboardName = storyboardName {
            DispatchQueue.main.async {
                if let detailViewController = UIViewController.instanceViewControllerInStoryboard(withName: name, storyboardName: storyboardName){
                    UIViewController.topController?.navigationController?.pushViewController(detailViewController, animated: true)
                }
            }
        }
    }
}
