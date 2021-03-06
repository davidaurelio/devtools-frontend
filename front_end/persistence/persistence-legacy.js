// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import * as PersistenceModule from './persistence.js';

self.Persistence = self.Persistence || {};
Persistence = Persistence || {};

/** @constructor */
Persistence.Automapping = PersistenceModule.Automapping.Automapping;

/** @constructor */
Persistence.AutomappingStatus = PersistenceModule.Automapping.AutomappingStatus;

/** @constructor */
Persistence.EditFileSystemView = PersistenceModule.EditFileSystemView.EditFileSystemView;

/** @constructor */
Persistence.FileSystemWorkspaceBinding = PersistenceModule.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding;

/** @constructor */
Persistence.FileSystemWorkspaceBinding.FileSystem = PersistenceModule.FileSystemWorkspaceBinding.FileSystem;

/** @constructor */
Persistence.IsolatedFileSystem = PersistenceModule.IsolatedFileSystem.IsolatedFileSystem;

Persistence.IsolatedFileSystem.BinaryExtensions = PersistenceModule.IsolatedFileSystem.BinaryExtensions;

/** @constructor */
Persistence.IsolatedFileSystemManager = PersistenceModule.IsolatedFileSystemManager.IsolatedFileSystemManager;

/** @enum {symbol} */
Persistence.IsolatedFileSystemManager.Events = PersistenceModule.IsolatedFileSystemManager.Events;

/** @constructor */
Persistence.NetworkPersistenceManager = PersistenceModule.NetworkPersistenceManager.NetworkPersistenceManager;

Persistence.NetworkPersistenceManager.Events = PersistenceModule.NetworkPersistenceManager.Events;

Persistence.PersistenceActions = {};

/** @constructor */
Persistence.PersistenceActions.ContextMenuProvider = PersistenceModule.PersistenceActions.ContextMenuProvider;

/** @constructor */
Persistence.Persistence = PersistenceModule.Persistence.PersistenceImpl;

Persistence.Persistence.Events = PersistenceModule.Persistence.Events;
Persistence.Persistence._NodeShebang = PersistenceModule.Persistence.NodeShebang;
Persistence.Persistence._NodePrefix = PersistenceModule.Persistence.NodePrefix;
Persistence.Persistence._NodeSuffix = PersistenceModule.Persistence.NodeSuffix;

/** @constructor */
Persistence.PathEncoder = PersistenceModule.Persistence.PathEncoder;

/** @constructor */
Persistence.PersistenceBinding = PersistenceModule.Persistence.PersistenceBinding;

/** @constructor */
Persistence.PersistenceUtils = PersistenceModule.PersistenceUtils.PersistenceUtils;

/** @constructor */
Persistence.PersistenceUtils.LinkDecorator = PersistenceModule.PersistenceUtils.LinkDecorator;

/** @constructor */
Persistence.PlatformFileSystem = PersistenceModule.PlatformFileSystem.PlatformFileSystem;

/** @constructor */
Persistence.WorkspaceSettingsTab = PersistenceModule.WorkspaceSettingsTab.WorkspaceSettingsTab;

/** @typedef {!{type: string, fileSystemName: string, rootURL: string, fileSystemPath: string}} */
Persistence.IsolatedFileSystemManager.FileSystem;

/** @typedef {!{changed:!Platform.Multimap<string, string>, added:!Platform.Multimap<string, string>, removed:!Platform.Multimap<string, string>}} */
Persistence.IsolatedFileSystemManager.FilesChangedData;

/**
 * @type {!PersistenceModule.IsolatedFileSystemManager.IsolatedFileSystemManager}
 */
Persistence.isolatedFileSystemManager;

/** @type {!PersistenceModule.NetworkPersistenceManager.NetworkPersistenceManager} */
Persistence.networkPersistenceManager;

/** @type {!PersistenceModule.Persistence.PersistenceImpl} */
Persistence.persistence;
