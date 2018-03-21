//
//  RNViewController.swift
//  RNSwiftDemo
//
//  Created by lixingle on 2018/3/20.
//  Copyright © 2018年 com.lvesli. All rights reserved.
//

import UIKit

class RNViewController: UIViewController {
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        navigationController?.setNavigationBarHidden(true, animated: false)
    }
    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        navigationController?.navigationBar.isHidden = false
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "RNSwiftDemo",
            initialProperties: nil,
            launchOptions: nil
        )
        view = rootView
    }
   
 


}
