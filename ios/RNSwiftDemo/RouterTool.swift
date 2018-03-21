//
//  RouterTool.swift
//  RNSwiftDemo
//
//  Created by lixingle on 2018/3/21.
//  Copyright © 2018年 com.lvesli. All rights reserved.
//

import UIKit

open class RouterTool: NSObject {
    @objc open static func routeBackToNative()  {
        DispatchQueue.main.async {
            UIViewController.topController?.navigationController?.popViewController(animated: true)
        }
    }
}
