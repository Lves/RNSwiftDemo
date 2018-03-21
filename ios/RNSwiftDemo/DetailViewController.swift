//
//  DetailViewController.swift
//  RNSwiftDemo
//
//  Created by lixingle on 2018/3/21.
//  Copyright © 2018年 com.lvesli. All rights reserved.
//

import UIKit

class DetailViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        title = "这是原生详情页"

    }

    @IBAction func toListRN(_ sender: Any) {
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "RNSwiftDemo",
            initialProperties: ["name":"listView"],
            launchOptions: nil
        )
        rootView?.frame = CGRect(x: 0, y: 0, width: 300, height: 500)
        view.addSubview(rootView!)
    }
}
